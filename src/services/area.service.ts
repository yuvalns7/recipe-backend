import areaModel, { IArea } from "../models/area.model";

interface ICreateAreaInput {
    name: IArea['name'];
  }
  const create = async({ name }: ICreateAreaInput): Promise<IArea>  => {
    return await areaModel.create({
      name
    })
      .then((data: any) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  }
  
  const clear = async () => {
      return areaModel.deleteMany({ });
  }

  const findByName = async(name: string) => {
    return areaModel.findOne({ name }).exec();
  
  }

  export default {
    create, clear, findByName
  };