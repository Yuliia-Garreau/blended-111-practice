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
import { validateBody } from '../middlewares/validateBody.js';
import { createProductSchema, updateProductSchema } from '../validation/products.js';

const router = Router();
router.get('/', ctrlWrapper(getAllProductsController));

router.get('/:id', isValidId, ctrlWrapper(getProductsByIdController));

router.post('/', validateBody(createProductSchema), ctrlWrapper(postProductController));

router.patch('/:id', isValidId, validateBody(updateProductSchema), ctrlWrapper(patchProductController));

router.delete('/:id', isValidId, ctrlWrapper(deleteProductController));

export default router;
