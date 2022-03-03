import { Request, Response } from 'express';
import { createRol, findAllRoles } from './services';

/**
 * @param {Request} req
 * @param {Response} res
 */

export const getAllRoles = async (req, res, next) => {
    try {
        const response = await findAllRoles();

        res.json(response);
    } catch (error) {
        next(error);
    }
};

/**
 * @param {Request} req
 * @param {Response} res
 */

export const newRol = async (req, res, next) => {
    const { rol, description } = req.body;

    try {
        const response = await createRol({ rol, description });

        res.json(response);
    } catch (error) {
        next(error);
    }
};
