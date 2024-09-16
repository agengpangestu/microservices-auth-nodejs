import { Router } from "express";
import * as AuthController from "../controllers/user.controller";

const AuthRouter: Router = Router();

AuthRouter.post("/register", AuthController.Store);
AuthRouter.post("/login", AuthController.Login);

export default AuthRouter;
