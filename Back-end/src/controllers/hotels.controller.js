const hotelsCtrl = {};

const Hotel = require("../models/Hotel");

/*

methods:
getHotels,
  createHotel,
  getHotel,
  deleteHotel,
  updateHotel,
  getByCity

fields:
name: { type: String, required: true },
  usr_id: { type: String, required: true },
  ciudad_id: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  price_per_person: { type: String, required: true },
  acommodation: { type: String, required: true },
  date: { type: Date, default: Date.now }
*/

hotelsCtrl.getByCity = async (req, res) => { 
  var queryParameter = ".*" + req.params.ciudad.substring(0, 4) + ".*";
  console.log(queryParameter)
  const hotels = await Hotel.find({ciudad : {$regex:queryParameter}}); //Devuelve un arreglo [{}, {}]
  res.json(hotels);
};

hotelsCtrl.getMyHotels = async (req, res) => {
  const hotels = await Hotel.find({usr_id : req.params.usr_id}); //Devuelve un arreglo [{}, {}]
  res.json(hotels);
};


hotelsCtrl.getHotels = async (req, res) => {
  const hotels = await Hotel.find(); //Devuelve un arreglo [{}, {}]
  res.json(hotels);
};

hotelsCtrl.createHotel = async (req, res) => {
  const {
    name,
  usr_id,
  ciudad,
  address,
  phone,
  price_per_person,
  acommodation // doble, etc
  } = req.body;
  const newHotel = new Hotel({
    name,
  usr_id,
  ciudad,
  address,
  phone,
  price_per_person,
  acommodation // doble, etc
  });
  await newHotel.save();
  console.log(newHotel);
  res.json({ message: "Hotel Saved" });
};

hotelsCtrl.getHotel = async (req, res) => {
  const hotel = await Hotel.findById(req.params.id);
  console.log(hotel);

  res.json({ hotel });
};

hotelsCtrl.updateHotel = async (req, res) => {
  const {
    name,
  usr_id,
  ciudad,
  address,
  phone,
  price_per_person,
  acommodation // doble, etc
  } = req.body;
  await Hotel.findOneAndUpdate(
    { _id: req.params.id },
    {
      name,
  usr_id,
  ciudad,
  address,
  phone,
  price_per_person,
  acommodation // doble, etc
    }
  );
  res.json({ message: "Hotel Updated" });
};

hotelsCtrl.deleteHotel = async (req, res) => {
  const hotel = await Hotel.findByIdAndDelete(req.params.id);
  res.json({ message: "Hotel deleted", hotel });
};


module.exports = hotelsCtrl;
