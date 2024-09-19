import express, { Express } from "express";

const app: Express = express();

import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";
import AuthRouter from "../routes/auth.route";
import UserRouter from "../routes/user.route";

dotenv.config();
app.use(morgan("common"));

app.use(
  cors({
    origin: ["*"],
    credentials: true,
  })
);
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/common/v1/auth", AuthRouter);
app.use("/api/common/v1/user", UserRouter);

export default app