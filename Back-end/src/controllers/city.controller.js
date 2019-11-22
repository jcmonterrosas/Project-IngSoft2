const cityCtrl = {};

const City = require("../models/City");

cityCtrl.getCities = async (req, res) => {
  const cities = await City.find(); //Devuelve un arreglo [{}, {}]
  res.json(cities);
};


cityCtrl.getCity = async (req, res) => {
  const city = await City.findById(req.params.id); 
  res.json(city);
};

cityCtrl.createCity = async (req, res) => {
  const { name } = req.body;
  const newCity = new City({
    name
  });
  await newCity.save();
  res.json({ message: "City Saved" });
};


cityCtrl.updateCity = async (req, res) => {
  const { name } = req.body;
  await City.findOneAndUpdate(
    { _id: req.params.id },
    {
      name
    }
  );
  res.json({ message: "City Updated" });
};

cityCtrl.deleteCity = async (req, res) => {
  const city = await City.findOneAndDelete(req.params.id);
  res.json({ message: "City deleted", city });
};

module.exports = cityCtrl;
