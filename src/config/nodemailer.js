import nodemailer from 'nodemailer';
import config from './index';
import logger from './logger';

const transporter = nodemailer.createTransport({
    host: config.nodeMailer.host,
    port: config.nodeMailer.port,
    secure: config.nodeMailer.secure, // true for 465, false for other ports
    auth: {
        user: config.nodeMailer.user, // generated ethereal user
        pass: config.nodeMailer.password, // generated ethereal password
    },
});

transporter.verify().then(() => {
    logger.info('Ready for sending email');
});

export default transporter;
