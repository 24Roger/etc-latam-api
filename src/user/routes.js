import { Router } from 'express';
import { getAllUsers } from './controllers';
import { loginUser, registerUser } from '../auth/controllers';
import { allUsersValidator } from './middlewares';
import { registerValidator, loginValidator } from '../auth/middlewares';

const router = Router();

router.get('/user/all', allUsersValidator, getAllUsers);
router.post('/user/register', registerValidator, registerUser);
router.post('/user/login', loginValidator, loginUser);

export default router;
