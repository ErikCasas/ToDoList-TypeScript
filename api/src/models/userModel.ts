import { Schema, model, Model } from 'mongoose';
import { User } from '../types';

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
  collections: {
    Pomodoro: [{ type: Schema.Types.ObjectId, ref: 'PomodoroModel' }],
    Calendar: [{ type: Schema.Types.ObjectId, ref: 'PomodoroModel' }],
    Notes: [{ type: Schema.Types.ObjectId, ref: 'NoteModel' }],
  },
});
const User: Model<User> = model<User>('ModelUser', userSchema);

export default User;
