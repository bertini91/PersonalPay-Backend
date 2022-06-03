const { Router } = require("express");
const {
  climateGet,
  getClimateByCity,
  getClimaByDays,
} = require("../controllers/climate.controller");
const { checkIP } = require("../middlewares/ipapi");

const router = Router();

router.get("/location", checkIP, climateGet);
router.get("/current", checkIP, getClimateByCity);
router.get("/forecast", checkIP, getClimaByDays);

module.exports = router;
