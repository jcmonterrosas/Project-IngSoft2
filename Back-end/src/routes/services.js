const { Router } = require("express");
const router = Router();

const {
  getServices,
  createService,
  getService,
  updateService,
  deleteService,
  getServicesByCity,
  getMyServices,
  getServiceByPriceInRange
} = require("../controllers/services.controllers");

router
  .route("/")
  .get(getServices)
  .post(createService);

router
  .route("/:id")
  .get(getService)
  .put(updateService)
  .delete(deleteService);

router
  .route("/filterByCity/:ciudad")
  .get(getServicesByCity);

  router
  .route("/filterByPrice/:menorque/:mayorque")
  .get(getServiceByPriceInRange);

router
  .route("/myservices/:usr_id")
  .get(getMyServices);

module.exports = router;
