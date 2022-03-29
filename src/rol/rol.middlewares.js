import { check, body } from 'express-validator';
import validResult from '../middlewares/validResult';

const rolRequired = check('rol', 'rol es requerido').isString().not().isEmpty();
const rolValid = body('rol').trim().toUpperCase().isLength({ min: 4, max: 15 }).withMessage('El rol debe tener entre 4 y 15 caracteres');

const descriptionRequired = check('description', 'description es requerido').isString().not().isEmpty();
const descriptionValid = body('description').trim().isLength({ min: 4, max: 20 }).withMessage('El description debe tener entre 4 y 20 caracteres');

export const newRolValidator = [
    rolRequired,
    rolValid,
    descriptionRequired,
    descriptionValid,
    validResult
];
