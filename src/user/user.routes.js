import { Router } from 'express';
import { getAllUsers } from './user.controllers';
import {
    loginUser,
    registerUser,
    changeRequestPassword,
    newPassword
} from '../auth/auth.controllers';
import { allUsersValidator } from './user.middlewares';
import {
    registerValidator,
    loginValidator,
    changeRequestPasswordValidator,
    newPasswordValidator
} from '../auth/auth.middlewares';

const router = Router();

router.get('/user/all', allUsersValidator, getAllUsers);
router.post('/user/register', registerValidator, registerUser);
router.post('/user/login', loginValidator, loginUser);
router.put('/user/change-password', changeRequestPasswordValidator, changeRequestPassword);
router.put('/user/new-password', newPasswordValidator, newPassword);

export default router;
