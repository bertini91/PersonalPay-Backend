const ipapi = require("ipapi.co");
const checkIP = async (req, res, next) => {
  const callback = (response) => {
    req.profile = response;
    next();
  };
  ipapi.location(callback);
};
// Validador creado con el objetivo del endpoint /location que solo es por localizacion.
const checkReqIp = async (req, res, next) => {
  if (req.profile) {
    next();
  } else {
    res.status(400).json({ msg: "We have a localization problem" });
  }
};

module.exports = { checkIP, checkReqIp };
