const { Router } = require("express");
const router = Router();

const {
  getRol,
  createRol,
  deleteRol,
  updateRol
} = require("../controllers/rol.controller");

router.route("/").post(createRol);

router
  .route("/:id")
  .get(getRol)
  .put(updateRol)
  .delete(deleteRol);

module.exports = router;
