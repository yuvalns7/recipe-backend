import recipeModel, { IRecipe } from "../models/recipe.model"

interface ICreateRecipeInput {
  name: IRecipe["name"]
  instructions: IRecipe["instructions"]
  imgUrl: IRecipe["imgUrl"]
  category: IRecipe["category"]
  area: IRecipe["area"]
  ingredients: IRecipe["ingredients"]
}
const create = async (recipe: any): Promise<IRecipe> => {
  return await recipeModel
    .create(recipe)
    .then((data: any) => {
      return data
    })
    .catch((error: Error) => {
      throw error
    })
}

const clear = () => {
  return recipeModel.deleteMany({})
}

export default {
  create,
  clear,
}
