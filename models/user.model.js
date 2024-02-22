import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
   name: {
      type: String,
      required: [true, "Name is Required"],
      // unique: true,
      trim: true,
   },
   email: {
      type: String,
      required: [true, "Email is Required"],
      unique: true,
   },
   password: {
      type: String,
      required: [true, "Password is Required"],
   },
});

export default mongoose.model("User", UserSchema);
