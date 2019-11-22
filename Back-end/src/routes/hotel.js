const { Router } = require("express");
const router = Router();

const {
  getHotels,
  createHotel,
  getHotel,
  deleteHotel,
  updateHotel,
  getByCity,
  getMyHotels
} = require("../controllers/hotels.controller");

router
  .route("/")
  .get(getHotels)
  .post(createHotel);

router
  .route("/:id")
  .get(getHotel)
  .put(updateHotel)
  .delete(deleteHotel);

router
  .route("/getbycity/:city_id")
  .get(getByCity);

router
  .route("/getmyhotels/:usr_id")
  .get(getMyHotels);

module.exports = router;
