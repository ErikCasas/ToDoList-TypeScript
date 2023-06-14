import User from '../../models/UserModel';
import bcrypt from 'bcrypt';
import { Role } from '../../types';
import { Request, Response } from 'express';

const SignUp = async (req: Request, res: Response) => {
  try {
    if (!req.body) return res.status(411).json('data is required');

    const { email, password, name } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.status(409).json('this user already exists');

    const hash = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      passwordHash: hash,
      role: 'User' as Role,
    });

    await newUser.save();
    return res
      .status(201)
      .json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.log('error', error);
    return res.status(500).json(error);
  }
};

export default SignUp;
