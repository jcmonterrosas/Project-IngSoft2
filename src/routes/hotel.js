const router = require("express").Router();

const Hotel = require("../models/Hotel");

router.get("/hotel/add", (req, res) => {
  res.render("hotel/new-hotel");
});

router.get("/hotel/new-hotel", async (req, res) => {
  const newHotel = new Hotel({
    hot_nombre: "test",
    hot_direccion: "test",
    hot_ciudad: "test",
    tel_contacto: "test",
    acomodacion: "test",
    precio_persona: "test"
  });
  await newHotel.save();
  res.redirect("/hotel/add");
});

module.exports = router;
