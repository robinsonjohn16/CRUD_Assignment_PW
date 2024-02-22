import express, { json } from "express";
import cors from "cors";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(json());
app.use(cors());

// Importing Routes
import userRouter from "./routes/user.routes.js";
app.use("/", userRouter);

export default app;
