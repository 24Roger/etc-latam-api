import { Router } from 'express';
import { newRol, getAllRoles } from './controllers';

const router = Router();

router.get('/rol/all', getAllRoles);
router.post('/rol/new', newRol);

export default router;
