const { Router } = require("express");
const router = Router();

const {
  getReservas,
  createReserva
} = require("../controllers/reserva.controllers");

router
  .route("/")
  .get(getReservas)
  .post(createReserva);

router
  .route("/:id")
  .get()
  .put()
  .delete();

module.exports = router;
