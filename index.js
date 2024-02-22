import express from "express";
// import mongoose from "";
import connectDb from "./database/db.js";
import app from "./app.js";
import { config } from "dotenv";

config();
const Port = process.env.PORT;
connectDb()
   .then((res) => {
      app.listen(Port, () => {
         console.log(`Server Running at Port http://localhost:${Port}`);
      });
   })
   .catch((err) => {
      // process.exit(1);
   });
