import { Router } from 'express';
import LogIn from '../../controllers/user/LogIn';
import SignUp from '../../controllers/user/SignUp';
const router = Router();

router.use('/LogIn', LogIn);
router.use('/SignUp',SignUp)
export default router;
