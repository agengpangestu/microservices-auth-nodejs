import { Router } from "express";
import * as UserController from '../controllers/user.controller'
import { verifJWT } from "../middlewares/jwt";

const UserRouter: Router = Router()

UserRouter.get("/",
    verifJWT as any,
    UserController.GetAll as any)

export default UserRouter