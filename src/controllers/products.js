import createHttpError from 'http-errors';
import {
  deleteProduct,
  getAllProducts,
  getProductsById,
  postProduct,
  updateProduct,
} from '../services/products.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';

export const getAllProductsController = async (req, res) => {
  const userId = req.user._id;
  const filter = parseFilterParams(req.query);
  const products = await getAllProducts(filter, userId);

  res.status(200).json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};

export const getProductsByIdController = async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;

  const data = await getProductsById({ _id: id, userId });
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
  const userId = req.user._id;

  const data = await postProduct({ ...req.body, userId });
  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data,
  });
};

export const patchProductController = async (req, res) => {
  const { id } = req.params;
  const userId = req.user._id;
  const data = await updateProduct({ _id: id, userId }, req.body);

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
  const userId = req.user._id;
  const product = await deleteProduct({ _id: id, userId });

  if (!product) {
    throw createHttpError(404, 'Product not found');
  }
  res.status(204).send();
};
