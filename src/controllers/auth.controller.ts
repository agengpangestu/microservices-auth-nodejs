import { Request, Response } from "express";
import * as UserService from "../services/auth.service";

export const Register = async (req: Request, res: Response): Promise<void> => {
  try {
    const user_created = await UserService.Register(req.body);
    res.status(201).json(user_created);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const Login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const { user, token } = await UserService.Login(email, password);
    res.status(200).json({ user, token });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
