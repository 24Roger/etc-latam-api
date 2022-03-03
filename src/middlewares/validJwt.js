import { validToken } from '../auth/services';

const validJwt = async (req, res, next) => {
    try {
        const token = req.header('Authorization');

        const user = await validToken(token);

        req.user = user;

        next();
    } catch (error) {
        next(error);
    }
};

export default validJwt;
