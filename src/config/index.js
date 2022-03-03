import { config } from 'dotenv';

const notFound = config();

if (!notFound) {
    throw new Error('Could not find .env file');
}

process.env.NODE_ENV === process.env.NODE_ENV || 'development';

export default {
    port: process.env.PORT || 4000,
    log: {
        level: process.env.LOG_LEVEL,
    },
    api: {
        prefix: '/api/v1'
    },
    dataBase: {
        name: process.env.DATABASE_NAME,
        userName: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        host: process.env.DATABASE_HOST,
        dialect: process.env.DATABASE_DIALECT,
        port: process.env.DATABASE_PORT
    },
    auth: {
        secret: process.env.AUTH_SECRET,
        ttl: process.env.AUTH_TTL
    },
};
