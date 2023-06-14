import { Router } from 'express';
import LogIn from '../../controllers/user/LogIn';
import SignUp from '../../controllers/user/SignUp';
import validateData from '../../middleware/validateData';
const router = Router();

router.post('/LogIn', LogIn);
router.post('/SignUp',validateData, SignUp);

export default router;
