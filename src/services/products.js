import { ProductModel } from '../db/model/Product.js';

export const getAllProducts = () => ProductModel.find();
