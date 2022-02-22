import { Request, Response } from 'express';
import { createUser, findAllUsers } from './services';

/**
 * @param {Request} req
 * @param {Response} res
 */

export const getAllUsers = async (req, res, next) => {
    try {
        const response = await findAllUsers();

        res.json(response);
    } catch (error) {
        next(error);
    }
};

/**
 * @param {Request} req
 * @param {Response} res
 */

export const newUser = async (req, res, next) => {
    try {
        const { user, password, email } = req.body;

        const response = await createUser({ user, password, email });

        res.json(response);
    } catch (error) {
        next(error);
    }
};
