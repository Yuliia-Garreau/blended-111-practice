import { Router } from 'express';
import {
  deleteProductController,
  getAllProductsController,
  getProductsByIdController,
  patchProductController,
  postProductController,
} from '../controllers/products.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { isValidId } from '../middlewares/isValidId.js';
const router = Router();
router.get('/', ctrlWrapper(getAllProductsController));

router.get('/:id', isValidId, ctrlWrapper(getProductsByIdController));

router.post('/', ctrlWrapper(postProductController));

router.patch('/:id', isValidId, ctrlWrapper(patchProductController));

router.delete('/:id', isValidId, ctrlWrapper(deleteProductController));

export default router;
