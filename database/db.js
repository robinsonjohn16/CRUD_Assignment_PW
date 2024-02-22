import mongoose from "mongoose";

const connectDb = async () => {
   const connectionInstance = mongoose
      .connect(process.env.MONGO_URL)
      .then((res) => {
         // console.log(res.connection);
         console.log("Connected to Database");
      })
      .catch((err) => {
         console.log(err.message);
         process.exit(1);
      });
};

export default connectDb;
