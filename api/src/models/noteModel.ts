import { Schema, model, Model } from 'mongoose';
import { Note } from '../types';

const noteSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'ModelUser',
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  important: {
    type: Boolean,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
});

const Note: Model<Note> = model<Note>('NoteModel', noteSchema);

export default Note;
