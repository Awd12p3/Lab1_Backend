import { Router } from 'express';
import { createOrder, deleteOrder, readOrder, updateOrder } from './orders.controller';

const orderRouter = Router();

orderRouter.post('/', createOrder);
orderRouter.get('/', readOrder);
orderRouter.patch('/', updateOrder);
orderRouter.delete('/', deleteOrder);

export default orderRouter;
