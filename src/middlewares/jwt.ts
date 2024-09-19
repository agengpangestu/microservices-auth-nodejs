import { NextFunction, Response } from "express";
import { CustomeRequest,verifToken, verifTokenAdmin, verifTokenAndAuthorizaton} from "microservices-nodejs";

export const verifJWT = (req: CustomeRequest, res: Response, next: NextFunction) => {
    verifToken(req,res,next, process.env.PUBLIC_KEY as string)
}