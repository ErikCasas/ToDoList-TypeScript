require('dotenv').config();
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json('No token provided');
    jwt.verify(
      token,
      process.env.JWT_SECRET || 'default-secret',
      (err, decoded) => {
        if (err) {
          return res.status(401).json({ error: 'Invalid token' });
        }
        req.body = decoded;
        return next();
      }
    );
    return; //es con el fin de que retorne el valor final
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default validateToken;
