import { Request, Response } from 'express';
import { login, register, createNewPassword } from './auth.services';
import { sendMail } from '../email/email.services';

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

/**
 * @param {Request} req
 * @param {Response} res
 */

export const changeRequestPassword = async (req, res, next) => {
    const { email } = req.body;

    try {
        await sendMail(email);
        res.status(200).json('Se ha enviado un correo electrónico con las instrucciones para cambiar la contraseña');

    } catch (error) {
        next(error);
    }
};

/**
 * @param {Request} req
 * @param {Response} res
 */

export const newPassword = async (req, res, next) => {
    try {
        const { password } = req.body;
        const token = req.headers['reset'];

        const response = await createNewPassword(token, password);

        res.json(response);
    } catch (error) {
        next(error);
    }

};
