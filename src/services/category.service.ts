import categoryModel, { ICategory } from "../models/category.model"

interface ICreateCategoryInput {
  name: ICategory["name"]
}
const create = async ({ name }: ICreateCategoryInput): Promise<ICategory> => {
  return await categoryModel
    .create({
      name,
    })
    .then((data: any) => {
      return data
    })
    .catch((error: Error) => {
      throw error
    })
}

const clear = () => {
  return categoryModel.deleteMany({ });
}

const findByName = async(name: string) => {
  return categoryModel.findOne({ name }).exec();

}

export default {
  create,
  clear,
  findByName
}
