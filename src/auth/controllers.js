import { Request, Response } from 'express';
import { login, register } from './services';

/**
 * @param {Request} req
 * @param {Response} res
 */

export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const response = await login(email, password);

        res.json(response);
    } catch (error) {
        next(error);
    }
};

/**
 * @param {Request} req
 * @param {Response} res
 */

export const registerUser = async (req, res, next) => {
    try {
        const { user, email, password } = req.body;

        const response = await register({ user, email, password });

        res.json(response);
    } catch (error) {
        next(error);
    }
};
