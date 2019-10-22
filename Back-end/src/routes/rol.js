const { Router } = require("express");
const router = Router();

const {
  getRol,
  createRol,
  deleteRol,
  updateRol,
  getRolId
} = require("../controllers/rol.controller");

router.route("/").get(getRol).post(createRol);

router
  .route("/:id")
  .get(getRolId)
  .put(updateRol)
  .delete(deleteRol);

module.exports = router;
