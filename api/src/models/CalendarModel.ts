import { Model, model, Schema } from 'mongoose';
import { Calendar } from '../types';

const calendarSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'ModelUser',
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
});
