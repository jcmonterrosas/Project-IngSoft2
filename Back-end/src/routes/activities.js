const { Router } = require("express");
const router = Router();

const {
  getActivities,
  createActivity,
  getActivity,
  updateActivity,
  deleteActivity,
  getActivityByCity,
  getActivityByPriceInRange
} = require("../controllers/activities.controllers");

router
  .route("/")
  .get(getActivities)
  .post(createActivity);

router
  .route("/:id")
  .get(getActivity)
  .put(updateActivity)
  .delete(deleteActivity);

module.exports = router;
