import { UserController } from 'controllers/user.controller';
import { Router } from 'express';
import { validationData } from 'middlewares/validate';
import { UpdateUserDto } from 'services/dto/update-user.dto';
import { UserDto } from 'services/dto/user.dto';

const userRouter = Router();

const {
  createUser,
  getUsers,
  deleteUser,
  updateUser
} = new UserController();

userRouter.post('/', validationData(UserDto), createUser);
userRouter.get('/', getUsers);
userRouter.put('/:id', validationData(UpdateUserDto), updateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;