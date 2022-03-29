import { Router } from 'express';
import { newRol, getAllRoles } from './rol.controllers';
import { newRolValidator } from './rol.middlewares';

const router = Router();

router.get('/rol/all', getAllRoles);
router.post('/rol/new', newRolValidator, newRol);

export default router;
