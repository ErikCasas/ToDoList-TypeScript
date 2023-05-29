import { Schema, model, Model } from 'mongoose';
import { User } from '../types';
import collectionSchema from './ColectionsModel';

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  passwordHash: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    required: true,
    trim: true,
  },
  collections: [collectionSchema],
});
const User: Model<User> = model<User>('ModelUser', userSchema);

export default User;
