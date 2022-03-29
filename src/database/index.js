import { Sequelize } from 'sequelize';
import config from '../config';
import logger from '../config/logger';

const sequelize = new Sequelize(
    config.dataBase.name,
    config.dataBase.userName,
    config.dataBase.password,
    {
        host: config.dataBase.host,
        dialect: config.dataBase.dialect,
        port: config.dataBase.port,
        dialectOptions: {
            /*ssl: {
                 require: true,
                 rejectUnauthorized: false
             }*/
        }
    }
);

const connect = async () => {
    logger.info('Checking database connection.');

    try {
        await sequelize.authenticate();
        //sequelize.sync({ force: true });
        logger.info('Connection has been established successfully.');
    } catch (error) {
        logger.error('Unable to connect to the database:', error);
    }

};

connect();

export default sequelize;
