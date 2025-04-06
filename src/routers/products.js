import { Router } from 'express';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  getAllProductsController,
  getProductsByIdController,
  postProductController,
} from '../controllers/products.js';
const router = Router();
router.get('/', ctrlWrapper(getAllProductsController));

router.get('/:id', ctrlWrapper(getProductsByIdController));

router.post('/', ctrlWrapper(postProductController));

export default router;
