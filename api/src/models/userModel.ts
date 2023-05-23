import { Schema, model, Model } from "mongoose"
import { User } from '../types';

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
  },
  collections:[ {
    type: Schema.Types.ObjectId,
    ref: 'CalendarModel',
  },{
    type: Schema.Types.ObjectId,
    ref: 'PomodoroModel',
  },{
    type: Schema.Types.ObjectId,
    ref: 'noteModel',
  },]
});
const User: Model<User> = model<User>('UserNotesModel', userSchema);

export default User;
