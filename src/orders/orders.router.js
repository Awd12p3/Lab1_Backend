import { Router } from 'express';
import {
  createOrder,
  deleteOrder,
  readOrder,
  readOrder_Sent,
  readOrder_User_Rest_Dates,
  updateOrder,
} from './orders.controller';

const orderRouter = Router();

orderRouter.post('/', createOrder);
orderRouter.get('/:id', readOrder);
orderRouter.get('/', readOrder_User_Rest_Dates);
orderRouter.get('/sent/', readOrder_Sent);
orderRouter.patch('/:id', updateOrder);
orderRouter.delete('/:id', deleteOrder);

export default orderRouter;
