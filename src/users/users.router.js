import { Router } from 'express';
import {
  createUser,
  deleteUser,
  readUser,
  updateUser,
  readUserByMailAndPassword,
} from './users.controller';

const userRouter = Router();

//CREATE
userRouter.post('/', createUser);

//READ
userRouter.get('/:id', readUser);
userRouter.get('/:mail/:password', readUserByMailAndPassword);

//UPDATE
userRouter.patch('/:id', updateUser);

//DELETE
userRouter.delete('/:id', deleteUser);

export default userRouter;
