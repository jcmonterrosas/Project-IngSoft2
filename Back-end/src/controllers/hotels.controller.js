const hotelsCtrl = {};

const Hotel = require("../models/Hotel");

hotelsCtrl.getHotels = async (req, res) => {
  const hotels = await Hotel.find(); //Devuelve un arreglo [{}, {}]
  res.json(hotels);
};

hotelsCtrl.createHotel = async (req, res) => {
  const { name, city, address, phone, price_per_person, acommodation } = req.body;
  const newHotel = new Hotel({
    name,
    city, 
    address,
    phone,
    price_per_person,
    acommodation
  });
  await newHotel.save();
  console.log(newHotel);
  res.json({ message: "Hotel Saved" });
};

hotelsCtrl.getHotel = async (req, res) => {
  const hotel = await Hotel.findById(req.params.id);
  console.log(hotel);

  res.json({ title: "Hotel" });
};

hotelsCtrl.updateHotel = async (req, res) => {
  const { name, city, address, phone, price_per_person, acommodation } = req.body;
  await Hotel.findOneAndUpdate(
    { _id: req.params.id },
    {
      name,
      city, 
      address,
      phone,
      price_per_person,
      acommodation
    }
  );
  res.json({ message: "Hotel Updated" });
};

hotelsCtrl.deleteHotel = async (req, res) => {
  const hotel = await Hotel.findOneAndDelete(req.params.id);
  res.json({ message: "Hotel deleted", hotel });
};

module.exports = hotelsCtrl;
