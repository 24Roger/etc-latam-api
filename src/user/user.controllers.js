import { Request, Response } from 'express';
import { findAllUsers } from './user.services';

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
