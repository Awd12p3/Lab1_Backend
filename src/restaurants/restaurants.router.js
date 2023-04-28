import { Router } from 'express';
import {
  createRestaurant,
  deleteRestaurant,
  readRestaurant,
  updateRestaurant,
} from './restaurants.controller';

const restaurantRouter = Router();

restaurantRouter.post('/', createRestaurant);
restaurantRouter.get('/', readRestaurant);
restaurantRouter.patch('/', updateRestaurant);
restaurantRouter.delete('/', deleteRestaurant);

export default restaurantRouter;
