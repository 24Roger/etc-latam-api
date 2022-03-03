import { validationResult } from 'express-validator';
import AppError from '../errors/appError';

const validResult = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        throw new AppError('validation errors', 400, errors.errors);
    }

    next();
};

export default validResult;
