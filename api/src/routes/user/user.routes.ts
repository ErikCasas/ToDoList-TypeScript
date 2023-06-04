import { Router } from 'express';
import LogIn from '../../controllers/user/LogIn';
const router = Router();

router.use('/user', LogIn);

export default router;
