import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { findUserByEmail, findUserById, createUser } from '../user/services';
import AppError from '../errors/appError';
import config from '../config';

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
        console.error(error);

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
        console.error(error);

        throw error;
    }
};
