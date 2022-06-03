const ipapi = require("ipapi.co");
const checkIP = async (req, res, next) => {
  try {
    const callback = (response) => {
      req.profile = response;
      next();
    };
    ipapi.location(callback);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Problema en el servidor" });
  }
};

module.exports = { checkIP };
