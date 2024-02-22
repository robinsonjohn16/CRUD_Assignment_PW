import User from "../models/user.model.js";

const registerController = async (req, res) => {
   const { name, email, password } = req.body;

   const existsUser = await User.findOne({ email });
   console.log(existsUser);
   if (existsUser) {
      res.status(401).json({ msg: "User Already Exists Failed" });
   }
   const user = await User.create({
      name,
      email,
      password,
   });
   if (!user) {
      throw new Error("User creation Failed");
   }
   res.status(200).json({ msg: "User Registered Successfully" });
};

const loginController = async (req, res) => {
   const { email, password } = req.body;
   const user = await User.findOne({ email });
   if (!user) {
      res.status(400).json({ msg: "No account associated with this email" });
   } else {
      if (user.password == password) {
         res.status(200).json({ msg: "User Login Successfully" });
      } else {
         res.status(200).json({ msg: "Incorrect Password" });
      }
   }
};

export { loginController, registerController };
