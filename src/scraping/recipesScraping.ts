import axios from "axios"
import areaService from "../services/area.service"
import categoryService from "../services/category.service"
import ingredientService from "../services/ingredient.service"
import recipeService from "../services/recipe.service"

export const scrapingRecipes = async () => {
  // await areaScrapping()
  // await categoryScrapping()
  // await ingredientScrapping()
  // await recipesScrapping()
}

const areaScrapping = async () => {
  await areaService.clear()
  axios
    .get("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
    .then(async (response) => {
      const areas = response.data.meals

      for await (const area of areas) {
        await areaService.create({ name: area.strArea })
      }
    })
    .catch((error) => {
      console.log(error)
    })
  console.log("finish areaScrapping")
}

const categoryScrapping = async () => {
  await categoryService.clear()
  axios
    .get("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
    .then(async (response) => {
      const categories = response.data.meals
      for await (const category of categories) {
        await categoryService.create({ name: category.strCategory })
      }
    })
    .catch((error) => {
      console.log(error)
    })
  console.log("finish categoryScrapping")
}

const ingredientScrapping = async () => {
  await ingredientService.clear()
  axios
    .get("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
    .then(async (response) => {
      const ingredients = response.data.meals
      for await (const ingredient of ingredients) {
        await ingredientService.create({
          name: ingredient.strIngredient,
        })
      }
    })
    .catch((error) => {
      console.log(error)
    })
  console.log("finish ingredientScrapping")
}

const recipeScrapping = async () => {
  return axios
    .get("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(async (response) => {
      const recipe = response.data.meals[0]
      const category = await categoryService.findByName(recipe.strCategory)
      const area = await areaService.findByName(recipe.strArea)
      const ingredientsMesure = await getIngredientsMesureForRecipe(recipe)

      const recipeObj = {
        name: recipe.strMeal,
        instructions: recipe.strInstructions,
        imgUrl: recipe.strMealThumb,
        category,
        area,
        ingredients: ingredientsMesure,
      }

      await recipeService.create(recipeObj)
    })
    .catch((error) => {
      console.log(error)
    })
}

const recipesScrapping = async () => {
  await recipeService.clear()

  for (let i = 0; i < 20; i++) {
    await recipeScrapping()
  }
}

const getIngredientsMesureForRecipe = async (recipe: any) => {
  const ingredientsMesure: any[] = []
  for (let i = 1; i <= 20; i++) {
    if (
      recipe[`strIngredient1${i}`] !== null &&
      recipe[`strIngredient1${i}`] !== undefined &&
      recipe[`strIngredient1${i}`] !== ""
    ) {
      let ingredient = await ingredientService.findByName(
        recipe[`strIngredient1${i}`]
      )

      if (!ingredient) {
        await ingredientService.create({
          name: recipe[`strIngredient1${i}`],
        })
        ingredient = await ingredientService.findByName(
          recipe[`strIngredient1${i}`]
        )
      }
      const measure = recipe[`strMeasure1${i}`]

      if (ingredient) {
        const obj = {
          ingredient: ingredient._id,
          measure,
        }

        ingredientsMesure.push(obj)
      }
    }
  }
  return ingredientsMesure
}
