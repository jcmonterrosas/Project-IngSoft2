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
  .route("/:id")
  .get(getHotel)
  .put(updateHotel)
  .delete(deleteHotel);

router.route("/name/:name").get(getHotelByName);

module.exports = router;
