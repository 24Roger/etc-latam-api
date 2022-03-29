import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { findUserByEmail, findUserById, createUser, resetToken, findUserByResetToken, changePassword } from '../user/user.services';
import AppError from '../errors/appError';
import config from '../config';
import logger from '../config/logger';

export const login = async (email, password) => {
    try {
        const user = await findUserByEmail(email);

        if (!user) {
            throw new AppError('El correo electrónico o la contraseña no son corectos', 401);
        }

        if (!user.enable) {
            throw new AppError('El usuario está deshabilitado', 401);
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if (!validPassword) {
            throw new AppError('El correo electrónico o la contraseña no son correctos', 401);
        }

        const token = jwt.sign(
            {
                id: user.id,
            },
            config.auth.secret,
            {
                expiresIn: config.auth.ttl
            }
        );

        return { token };

    } catch (error) {
        logger.error(error);

        throw error;
    }
};

export const register = async (user) => {
    await createUser(user);

    return 'Usuario registrado exitosamente';
};

export const validToken = async (token) => {
    try {
        if (!token) {
            throw new AppError('Se requiere token', 401);
        }

        let id;

        try {
            const obj = jwt.verify(token, config.auth.secret);

            id = obj.id;
        } catch (error) {
            throw new AppError('Token invalido', 401, token);
        }

        const user = await findUserById(id);

        if (!user) {
            throw new AppError('Token invalido', 401);
        }

        if (!user.enable) {
            throw new AppError('Usuario rechazado', 401);
        }

        return user;
    } catch (error) {
        logger.error(error);

        throw error;
    }
};

export const forgotPassword = async (email) => {
    try {
        const user = await findUserByEmail(email);

        if (!user) {
            throw new AppError('Se ha enviado un correo electrónico con las instrucciones para cambiar la contraseña', 401);
        }

        if (!user.enable) {
            throw new AppError('El usuario está deshabilitado', 401);
        }

        const token = jwt.sign(
            {
                id: user.id,
            },
            config.auth.secretReset,
            {
                expiresIn: config.auth.ttlReset
            }
        );

        await resetToken(user.id, token);

        const verificationToken = `http://localhost:${config.nodeMailer.portClient}/new-password/${token}`;

        return {
            verificationToken,
            email: user.email
        };

    } catch (error) {
        logger.error(error);

        throw error;
    }
};

export const createNewPassword = async (token, password) => {
    try {
        jwt.verify(token, config.auth.secretReset);
    } catch (error) {
        throw new AppError('Token invalido', 401, token);
    }

    const user = await findUserByResetToken(token);

    if (!user) {
        throw new AppError('El usuario no es correcto', 401);
    }

    try {
        await changePassword(user.id, password);

        return 'Contraseña cambiada exitosamente';
    } catch (error) {
        logger.error(error);

        throw error;
    }
};

