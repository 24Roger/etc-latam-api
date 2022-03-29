import transporter from '../config/nodemailer';
import config from '../config';
import { forgotPassword } from '../auth/auth.services';
import logger from '../config/logger';

export const sendMail = async (email) => {
    const user = await forgotPassword(email);

    try {
        if (user) {
            await transporter.sendMail({
                from: `Cambio de contraseña <${config.nodeMailer.user}>`, // sender address
                to: user.email, // list of receivers
                subject: `Has olvidado tu contraseña`, // Subject line
                html: `
        <b>Haga click en el enlace o péguelo en su navegador para completar el proceso;</b>
        <a href='${user.verificationToken}'>${user.verificationToken}</a>
        `, // html body
            });
        }
    } catch (error) {
        logger.error(error);

        throw error;
    }
};
