import { Request, Response } from "express";
import { CustomeRequest } from "microservices-nodejs";
import * as UserServices from "../services/user.service";

const GetAll = async (req: CustomeRequest, res: Response) => {
  try {
    const users = await UserServices.GetAll();
    res.status(200).json({
      status: true,
      statusCode: 200,
      data: users,
      user: req.user,
    });
  } catch (error: any) {
    throw new Error(`Error Get Users: ${error.message}`);
  }
};

export { GetAll };
