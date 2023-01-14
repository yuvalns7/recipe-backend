import mongoose, { Schema, Document } from "mongoose"

export interface IArea extends Document {
  name: string
}

const AreaSchema: Schema = new Schema({
  name: { type: String, required: true },
})

export default mongoose.model<IArea>("Area", AreaSchema)
