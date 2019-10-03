const resCtrl = {};

const Reserva = require("../models/Reserva");
const Activities = require("../models/Activities");

resCtrl.getReservas = async (req, res) => {
  const reservas = await Reserva.find()
    .populate("activity")
    .populate("hotel"); //Devuelve un arreglo [{}, {}]
  console.log(reservas);
  res.json(reservas);
};

resCtrl.createReserva = async (req, res) => {
  const { activity, name } = req.body;
  const newReserva = new Reserva({
    activity,
    hotel,
    name
  });
  await newReserva.save();
  console.log(newReserva);
  res.json({ message: "Reserva Saved" });
};

module.exports = resCtrl;
