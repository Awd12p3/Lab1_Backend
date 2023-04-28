import { Router } from 'express';
import { createUser, deleteUser, readUser, updateUser } from './users.controller';

const userRouter = Router();

//CREATE
userRouter.post('/', createUser);
//READ
userRouter.get('/', readUser);
//UPDATE
userRouter.patch('/', updateUser);
//DELETE
userRouter.delete('/', deleteUser);

export default userRouter;
