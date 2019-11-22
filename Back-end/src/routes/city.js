const { Router } = require("express");
const router = Router();

const {
  getCities,
  createCity,
  deleteCity,
  updateCity,
  getCity
} = require("../controllers/city.controller");

router.route("/")
  .get(getCities)
  .post(createCity);

router
  .route("/:id")
  .get(getCity)
  .put(updateCity)
  .delete(deleteCity);

module.exports = router;
