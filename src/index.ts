import express, { Express } from "express";
import mongoose from "mongoose";
import app from "./utils/index";


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
  .connect(process.env.MONGODB_URL)
  .then(() => {})
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

const PORT = process.env.APP_PORT;

app.listen(PORT, () => {
  console.log(`Backend server is running at port ${PORT}`);
});

export default app;
