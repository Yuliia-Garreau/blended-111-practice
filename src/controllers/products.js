import createHttpError from 'http-errors';
import {
  deleteProduct,
  getAllProducts,
  getProductsById,
  postProduct,
  updateProduct,
} from '../services/products.js';

export const getAllProductsController = async (req, res) => {
  const products = await getAllProducts();
  res.status(200).json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};

export const getProductsByIdController = async (req, res) => {
  const { id } = req.params;
  const data = await getProductsById(id);
  if (!data) {
    throw createHttpError(404, 'Product not found');
  }
  res.status(200).json({
    status: 200,
    message: `Successfully found product with id ${id}!`,
    data,
  });
};

export const postProductController = async (req, res) => {
  const data = await postProduct(req.body);
  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data,
  });
};

export const patchProductController = async (req, res) => {
  const { id } = req.params;
  const data = await updateProduct(id, req.body);

  if (!data) {
    throw createHttpError(404, 'Product not found');
  }

  res.json({
    status: 200,
    message: 'Successfully patched a product!',
    data,
  });
};

export const deleteProductController = async (req, res) => {
  const { id } = req.params;
  const product = await deleteProduct(id);

  if (!product) {
    throw createHttpError(404, 'Product not found');
  }
  res.status(204).send();
};
