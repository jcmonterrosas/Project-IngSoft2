const { Router } = require("express");
const router = Router();

const {
  getHotels,
  createHotel,
  getHotel,
  deleteHotel,
  updateHotel,
  getHotelByName
} = require("../controllers/hotels.controller");

router
  .route("/")
  .get(getHotels)
  .post(createHotel);

router
  .route("/:name")
  .get(getHotelByName)
  .put(updateHotel)
  .delete(deleteHotel);

module.exports = router;
