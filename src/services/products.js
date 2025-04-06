import { ProductModel } from '../db/model/Product.js';

export const getAllProducts = () => ProductModel.find();

export const getProductsById = (id) => ProductModel.findOne({ _id: id });

export const postProduct = (payload) => ProductModel.create(payload);
