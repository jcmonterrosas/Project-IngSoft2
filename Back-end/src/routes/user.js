const { Router } = require("express");
const router = Router();

const {
  getUsers,
  register,
  getUser,
  updateUser,
  deleteUser,
  login,
  logout,
  verify
} = require("../controllers/user.controllers");

router
  .route("/")
  .get(getUsers)
  .post(register);

router
  .route("/:id")
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

router.route("/login")
    .post(login);

router.route("/logout/:token")
    .get(logout);

router.route("/verify/:token")
    .get(verify);

module.exports = router;
