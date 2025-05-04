import { Schema, model } from 'mongoose';
import { categoryList } from '../../constants/index.js';

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: categoryList,
      default: 'other',
    },
    description: {
      type: String,
    },
    userId: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
export const ProductModel = model('product', productSchema);
