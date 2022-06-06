const { Router } = require("express");
const {
  climateGet,
  getClimateByCity,
  getClimaByDays,
} = require("../controllers/climate.controller");
const { checkIP, checkReqIp } = require("../middlewares/ipapi");
const { validateData } = require("../middlewares/validate-data");

const router = Router();

router.get("/location", [checkIP, checkReqIp], climateGet);
router.get("/current", [checkIP, validateData], getClimateByCity);
router.get("/forecast", [checkIP, validateData], getClimaByDays);

module.exports = router;
