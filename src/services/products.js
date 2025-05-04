import { ProductModel } from '../db/model/Product.js';

export const getAllProducts = async (filter, userId) => {
  const productQuery = ProductModel.find({ userId });
  if (filter.category) {
    productQuery.where('category').equals(filter.category);
  }
  if (filter.maxPrice) {
    productQuery.where('price').lte(filter.maxPrice);
  }
  if (filter.minPrice) {
    productQuery.where('price').gte(filter.minPrice);
  }

  return productQuery;
};

export const getProductsById = (id) => ProductModel.findOne(id);

export const postProduct = (payload) => ProductModel.create(payload);

export const updateProduct = async (id, payload) =>
  ProductModel.findOneAndUpdate(id, payload, { new: true });

export const deleteProduct = (id) => ProductModel.findOneAndDelete(id);
