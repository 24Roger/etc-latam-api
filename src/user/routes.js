import { Router } from 'express';
import { newUser, getAllUsers } from './controllers';

const router = Router();

router.get('/user/all', getAllUsers);
router.post('/user/new', newUser);

export default router;
