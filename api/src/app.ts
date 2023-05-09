import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import rute from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(rute);

export default app;

