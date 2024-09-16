import express, { Express } from "express";
const app: Express = express();

import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";
import AuthRouter from "./routes/auth.route";

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

app.get("/", async (req: express.Request, res: express.Response) => {
  try {
    res.send("Welcome to unit testing guide for nodejs, typescript and express");
  } catch (error) {
    console.log(error);
  }
});

if (!process.env.MONGODB_URL) {
  throw new Error("MONGO_URI environment variable is not define");
}

mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => {
    console.log("MongoDB connected to the backend successfully");
  })
  .catch((err) => {
    console.log("Could connect to database");
    console.log(err);
    process.exit(1);
  });

app.get("/", async (req: express.Request, res: express.Response) => {
  try {
    res.send("Welcome to unit testing guide for nodejs, typescript and express");
  } catch (error) {
    console.log(error);
  }
});

app.use("/api/common/v1/auth", AuthRouter);

const PORT = process.env.APP_PORT;

app.listen(PORT, () => {
  console.log(`Backend server is running at port ${PORT}`);
});

export default app;
