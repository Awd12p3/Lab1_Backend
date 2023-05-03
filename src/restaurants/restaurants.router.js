import { Router } from 'express';
import {
  createRestaurant,
  deleteRestaurant,
  readRestaurant,
  updateRestaurant,
  readRestaurant_NameOrCat,
} from './restaurants.controller';

const restaurantRouter = Router();

restaurantRouter.post('/', createRestaurant);
restaurantRouter.get('/:id', readRestaurant);
restaurantRouter.get('/', readRestaurant_NameOrCat); //??????
restaurantRouter.patch('/:id', updateRestaurant);
restaurantRouter.delete('/:id', deleteRestaurant);

export default restaurantRouter;
