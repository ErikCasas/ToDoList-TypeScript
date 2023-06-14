import { Request, Response, NextFunction } from 'express';

const validateData = (
  req: Request | any,
  res: Response | any,
  next: NextFunction
) => {
  const { email, password, name } = req.body;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^.{1,15}$/;
  const nameRegex = /^[A-Za-záéíóúÁÉÍÓÚñÑ\s'-]+$/;

  if (!emailRegex.test(email)) {
    return res.status(415).json('email are invalid');
  }
  if (!passwordRegex.test(password)) {
    return res.status(415).json('password are invalid');
  }
  if (!nameRegex.test(name)) {
    return res.status(415).json('name are invalid');
  }
  next();
};



export default validateData
