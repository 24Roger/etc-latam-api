import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { notFound, errorHandler } from '../errors/error';
import config from '../config';
import user from '../user/routes';
import rol from '../rol/routes';

const app = express();

app.use(json());
app.use(morgan('dev'));
app.use(cors());

app.use(config.api.prefix, user);
app.use(config.api.prefix, rol);

app.use(notFound);
app.use(errorHandler);

export default app;
