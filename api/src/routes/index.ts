import { Router } from 'express';
import userRoutes from './user/user.routes'
const rute = Router();

rute.use('/User',userRoutes)
// rute.use()

export default rute;
// rutas.get('/pinocho', validateToken, otrafuncion)

