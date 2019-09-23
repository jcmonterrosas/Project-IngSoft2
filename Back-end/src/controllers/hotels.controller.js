const hotelsCtrl = {};

const Hotel = require("../models/Hotel");

hotelsCtrl.getHotels = async (req, res) => {
  const hotels = await Hotel.find(); //Devuelve un arreglo [{}, {}]
  res.json(hotels);
};

hotelsCtrl.createHotel = async (req, res) => {
  const { name, cedula } = req.body;
  const newHotel = new Hotel({
    name,
    cedula
  });
  await newHotel.save();
  console.log(newHotel);
  res.json({ message: "Hotel Saved" });
};

hotelsCtrl.getHotel = async (req, res) => {
  const hotel = await Hotel.findById(req.params.id);
  console.log(hotel);

  res.json({ title: "Note" });
};

hotelsCtrl.updateHotel = async (req, res) => {
  const { name, cedula } = req.body;
  await Hotel.findOneAndUpdate(
    { _id: req.params.id },
    {
      name,
      cedula
    }
  );
  res.json({ message: "Notes Updated" });
};

hotelsCtrl.deleteHotel = async (req, res) => {
  const hotel = await Hotel.findOneAndDelete(req.params.id);
  res.json({ message: "Note deleted", hotel });
};

module.exports = hotelsCtrl;
