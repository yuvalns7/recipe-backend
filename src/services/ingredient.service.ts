import  ingredientModel, { IIngredient } from "../models/ingredient.model";

interface ICreateIngredientInput {
    name: IIngredient['name'];
  }
  const create = async({ name }: ICreateIngredientInput): Promise<IIngredient>  => {
    return await ingredientModel.create({
      name
    })
      .then((data: any) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  }
  
  const clear = () => {

      return ingredientModel.deleteMany({ });
  }

  const findByName = async(name: string) => {
    return ingredientModel.findOne({ name }).exec();
  
  }

  export default {
    create, clear, findByName
  };