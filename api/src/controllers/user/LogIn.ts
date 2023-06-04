require('dotenv').config();
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../../models/UserModel';
import { Request, Response } from 'express';

const LogIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: 'Email and password are requiered' });
    }
    const user = await User.findOne({ email });
    const accessGranted =
      user !== null && (await bcrypt.compare(password, user.passwordHash));

    if (accessGranted) {
      const userToken = {
        id: user?._id,
        name: user?.name,
        role: user?.role,
        email: user?.email,
      };
      const { id, ...info } = userToken;

      const Token = jwt.sign(userToken, process.env.JWT || 'default-secret');
      const response = { ...info, Token };
      return res.status(200).json(response);
    }
    return res.status(401).json({ error: 'Invalid email or password' });
  } catch (error) {
    console.log('error', error);
    return res.status(500).json({ 'error :>> ': error });
  }
};

export default LogIn;
