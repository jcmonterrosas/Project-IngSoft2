const hotelsCtrl = {};

const Hotel = require("../models/Hotel");


hotelsCtrl.getByCity = async (req, res) => { 
  var queryParameter = ".*" + req.params.ciudad.substring(0, 4) + ".*";
  const hotels = await Hotel.find({ciudad : {$regex:queryParameter}}); 
  res.json(hotels);
};

hotelsCtrl.getMyHotels = async (req, res) => {
  const hotels = await Hotel.find({usr_id : req.params.usr_id}); 
  res.json(hotels);
};


hotelsCtrl.getHotels = async (req, res) => {
  const hotels = await Hotel.find();
  res.json(hotels);
};

hotelsCtrl.createHotel = async (req, res) => {
  const {
    name,
  usr_id,
  ciudad,
  telefono_contacto,
  address,
  phone,
  price_per_person,
  acommodation // doble, etc
  } = req.body;
  const newHotel = new Hotel({
    name,
  usr_id,
  ciudad,
  telefono_contacto,
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
  telefono_contacto,
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
  telefono_contacto,
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
