import app from './routes/app';
import config from './config';
import logger from './config/logger';

const port = config.port;

app.listen(port, () => {
    logger.info(`Server running on port: ${port}`);
});
