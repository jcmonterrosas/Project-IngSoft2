const { Router } = require("express");
const router = Router();


// metodos para agregar item temporal, recibe el id del hotel o de la actividad para poder agregar las cosas addItemTemporal
// metodo para quitar item temporal, solo con id, deleteItemTemporal
// metodo para actualizar item temporal, borrar y agregar de nuevo
// metodo para crear reserva, debe agregar los item temporarl a itemreserva y borrarlos. createReserva
// metodo para borrar reserva, deleteReserva
// cancelar reserva, cancelReserva

const {
  addItemTemporal,
  deleteItemTemporal,
  createReserva,
  deleteReserva,
  cancelReserva,
  getMyReservas,
  getReserva,
  getTemporalItems,
  getitemreserva
} = require("../controllers/reserva.controllers");

router
  .route("/:usr_id")
  .post(createReserva);

router
  .route("/:id")
  .put(cancelReserva)
  .delete(deleteReserva);

router
  .route("/additem/:usr_id")
  .post(addItemTemporal);

router
  .route("/item/:id")
  .delete(deleteItemTemporal);

router
  .route("/misreservas/:usr_id")
  .get(getMyReservas);

router
  .route("/getreserva/:id")
  .get(getReserva);

router
  .route("/shopingcart/:usr_id")
  .get(getTemporalItems);


module.exports = router;
