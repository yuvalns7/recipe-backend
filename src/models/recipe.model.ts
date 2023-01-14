import mongoose, { Schema, model, Document, Types } from "mongoose"
import { IArea } from "./area.model"
import { ICategory } from "./category.model"
import { IIngredient } from "./ingredient.model"
import { IUser } from "./user.model"

export interface IIngredientMesure {
  ingredient: Types.ObjectId
  measure: string
}

export interface IRecipe extends Document {
  // user: Types.ObjectId
  name: string
  instructions: string
  imgUrl: string
  category: Types.ObjectId
  area: Types.ObjectId
  ingredients: Types.DocumentArray<IIngredientMesure>
}

interface IPopulatedRecipe {
  user: IUser | null
  category: ICategory | null
  area: IArea | null
}

const RecipeSchema: Schema = new Schema({
  // user: { type: Schema.Types.ObjectId, ref: "User" },
  name: { type: String, required: true, unique: true },
  instructions: { type: String, required: true },
  imgUrl: { type: String, required: true },
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  area: { type: Schema.Types.ObjectId, ref: "Area" },
  ingredients: [
    {
      ingredient: { type: Schema.Types.ObjectId, ref: "Ingredient" },
      measure: { type: String},
    },
  ],
})

// Export the model and return your IUser interface
export default mongoose.model<IRecipe>("Recipe", RecipeSchema)

// const RecipeModel = mongoose.model<IRecipe>('Recipe', RecipeSchema);
// RecipeModel.findOne({}).populate<Pick<IPopulatedRecipe, 'category'>>('category').orFail().then(doc => {
//   // Works
//   const t: string = doc.category?.name || '';
// });
