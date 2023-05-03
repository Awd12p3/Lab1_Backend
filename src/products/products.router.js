import { Router } from 'express';
import {
  createProduct,
  deleteProduct,
  readProduct,
  readProduct_RestOrCategory,
  updateProduct,
} from './products.controller';

const productRouter = Router();

productRouter.post('/', createProduct);
productRouter.get('/', readProduct);
productRouter.get('/', readProduct_RestOrCategory);
productRouter.patch('/', updateProduct);
productRouter.delete('/', deleteProduct);

export default productRouter;
