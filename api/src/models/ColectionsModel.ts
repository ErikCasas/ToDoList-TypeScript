import { Schema, model, Model } from 'mongoose';

const collectionSchema = new Schema({
  type: {
    type: String,
    required: true,
    trim: true,
  },
  items: [
    {
      type: Schema.Types.ObjectId,
      refPath: 'collections.type',
    },
  ],
});

export default collectionSchema;
