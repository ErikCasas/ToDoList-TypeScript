import { Model, model, Schema } from 'mongoose';
import { Pomodoro } from '../types';

const pomodoroSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'ModelUser',
  },
  remainingTime: {
    type: Number,
    required: true,
    min: 0,
  },
  description: {
    type: String,
    required: true,
  },
});

const Pomodoro: Model<Pomodoro> = model<Pomodoro>(
  'PomodoroModel',
  pomodoroSchema
);

export default Pomodoro;
