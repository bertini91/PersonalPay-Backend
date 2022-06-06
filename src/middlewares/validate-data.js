const { response } = require("express");

const validateData = (req, res = response, next) => {
  if (!req.profile && !req.query.city) {
    return res.status(400).json({ msg: "You must send the city name" });
  }
  next();
};

module.exports = {
  validateData,
};
