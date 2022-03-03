import validJwt from '../middlewares/validJwt';
import validResult from '../middlewares/validResult';

export const allUsersValidator = [
    validJwt,
    validResult
];
