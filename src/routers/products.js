import { Router } from 'express';
import {
  deleteProductController,
  getAllProductsController,
  getProductsByIdController,
  patchProductController,
  postProductController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
const router = Router();
router.get('/', ctrlWrapper(getAllProductsController));

router.get('/:id', ctrlWrapper(getProductsByIdController));

router.post('/', ctrlWrapper(postProductController));

router.patch('/:id', ctrlWrapper(patchProductController));

router.delete('/:id', ctrlWrapper(deleteProductController));

export default router;
