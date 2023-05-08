import { Schema, model, Model } from "mongoose"
import { Role, User } from '../types';

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
    trim: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
  },
  passwordHash: {
    type: String,
    require: true,
    trim: true,
  },
  role: {
    type: String,
    require: true,
    trim: true,
  }
});
const User: Model<User> = model<User>('UserNotesModel', userSchema);

export default User;
