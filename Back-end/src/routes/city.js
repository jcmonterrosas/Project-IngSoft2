const { Router } = require("express");
const router = Router();

const {
  getCity,
  createCity,
  deleteCity,
  updateCity
} = require("../controllers/city.controller");

router.route("/").post(createCity);

router
  .route("/:id")
  .get(getCity)
  .put(updateCity)
  .delete(deleteCity);

module.exports = router;
