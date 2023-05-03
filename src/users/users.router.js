import { Router } from 'express';
import {
  createUser,
  deleteUser,
  readUser,
  updateUser,
  readUserByMailAndPassword,
} from './users.controller';

const userRouter = Router();

//Create
userRouter.post('/', createUser);

//Read
userRouter.get('/:id', readUser);
userRouter.get('/:mail/:password', readUser_Mail);

//Update
userRouter.patch('/:id', updateUser);

//Delete
userRouter.delete('/:id', deleteUser);

export default userRouter;
