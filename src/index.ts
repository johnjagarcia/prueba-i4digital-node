import 'reflect-metadata';
import dotenv from 'dotenv';
dotenv.config();

import App from './app';

const port = +process.env.SERVER_PORT;

const app = new App(port);
app.listen();
