import mongoose, { Schema, Document } from 'mongoose';

export enum Gender {
  male = 'male',
  female = 'female',
  undisclosed = 'undisclosed'
}


export interface IUser extends Document {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  gender?: Gender;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true},
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  // Gets the Mongoose enum from the TypeScript enum
  gender: { type: String, enum: Object.values(Gender) },
});

// Export the model and return your IUser interface
export default mongoose.model<IUser>('User', UserSchema);