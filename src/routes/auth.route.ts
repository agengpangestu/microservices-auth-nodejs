import { Router } from "express";
import * as AuthController from "../controllers/auth.controller";

const AuthRouter: Router = Router();

AuthRouter.post("/register", AuthController.Register);
AuthRouter.post("/login", AuthController.Login);

export default AuthRouter;
