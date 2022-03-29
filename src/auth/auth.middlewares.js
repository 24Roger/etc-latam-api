import { check, body, header } from 'express-validator';
import validResult from '../middlewares/validResult';
import { findUserByEmail } from '../user/user.services';
import AppError from '../errors/appError';

const userRequired = check('user', 'El usuario es requerido').not().isEmpty();

const userValid = body('user').trim().isLength({ min: 5, max: 20 }).withMessage('El usuario debe tener entre 5 y 20 caracteres').toUpperCase();

const emailRequired = check('email', 'El correo electrónico es requerido').not().isEmpty();

const emailValid = body('email').trim().isEmail().withMessage('El correo electrónico es invalido').normalizeEmail().toLowerCase();

const emailExists = check('email').custom(
    async (email = '') => {
        const emailFound = await findUserByEmail(email);

        if (emailFound) {
            throw new AppError('El correo electrónico ya existe', 400);
        }
    }
);

const passwordRequired = check('password', 'La contraseña es requerida').not().isEmpty();

const passwordValid = body('password').trim().isLength({ min: 8, max: 50 }).withMessage('La contraseña debe tener entre 8 y 50 caracteres').isStrongPassword().withMessage('La contraseña es debil');

const resetRequired = header('reset', 'El reset es requerido').not().isEmpty();

export const registerValidator = [
    userRequired,
    userValid,
    emailRequired,
    emailValid,
    emailExists,
    passwordRequired,
    passwordValid,
    validResult
];

export const loginValidator = [
    emailRequired,
    emailValid,
    passwordRequired,
    passwordValid,
    validResult
];

export const changeRequestPasswordValidator = [
    emailRequired,
    emailValid,
    validResult
];

export const newPasswordValidator = [
    passwordRequired,
    passwordValid,
    resetRequired,
    validResult
];

