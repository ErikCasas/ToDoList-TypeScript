require('dotenv').config();
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { Router } from 'express';

const router = Router();

const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
    const decoded = jwt.verify(token, process.env.JWT || 'default-secret');

    // pendiente definir el caso en el que puede ser aceptado a segun el esquema por hacer 
  } catch (error) {
    
  }
};




