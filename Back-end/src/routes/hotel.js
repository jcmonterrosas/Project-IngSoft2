const { Router } = require("express");
const router = Router();

const {
  getHotels,
  createHotel,
  getHotel,
  deleteHotel,
  updateHotel
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

module.exports = router;
