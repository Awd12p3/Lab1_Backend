import { Router } from 'express';
import { createProduct, deleteProduct, readProduct, updateProduct } from './products.controller';

const productRouter = Router();

productRouter.post('/', createProduct);
productRouter.get('/', readProduct);
productRouter.patch('/', updateProduct);
productRouter.delete('/', deleteProduct);

export default productRouter;
