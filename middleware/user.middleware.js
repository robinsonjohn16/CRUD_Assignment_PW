const verifyRegisterDetails = (req, res, next) => {
   const { name, email, password } = req.body;
   if (!name || !password || !email) {
      res.status(401).json({
         msg: "All inputs fields are required",
      });
   } else {
      next();
   }
};

const verifyLoginDetails = (req, res, next) => {
   const { email, password } = req.body;
   if (!password && !email) {
      res.status(401).json({
         msg: "All inputs fields are required",
      });
   } else {
      next();
   }
};

export { verifyRegisterDetails, verifyLoginDetails };
