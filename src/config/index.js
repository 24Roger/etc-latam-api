import dotenv from 'dotenv';

const notFound = dotenv.config();

if (notFound.error) {
    throw new Error('Could not find .env file');
}

process.env.NODE_ENV === process.env.NODE_ENV || 'development';

export default {
    port: process.env.PORT || 4000,
    log: {
        level: process.env.LOG_LEVEL,
    }
};
