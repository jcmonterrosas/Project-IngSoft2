const servicesCtrl = {};

const Services = require("../models/Services");
const City = require("../models/City");


servicesCtrl.getServices = async (req, res) => {
  const services = await Services.find(); //Devuelve un arreglo [{}, {}]
  res.json(services);
};

servicesCtrl.createService = async (req, res) => {
  const {
    act_nombre,
  act_descripcion,
  precio,
  usr_id,
  act_lugar,
  telefono_contacto,
  ciudad_id
  } = req.body;
  const newService = new Services({
    act_nombre,
    act_descripcion,
    precio,
    usr_id,
    act_lugar,
    telefono_contacto,
    ciudad_id,
  });
  await newService.save();
  console.log(newService);
  res.json({ message: "Service Saved" });
};

servicesCtrl.getService = async (req, res) => {
  const service = await Services.findById(req.params.id);
  console.log(service);

  res.json({ service });
};

servicesCtrl.updateService = async (req, res) => {
  const {
    act_nombre,
    act_descripcion,
    precio,
    usr_id,
    act_lugar,
    telefono_contacto,
    ciudad_id
  } = req.body;
  await Services.findOneAndUpdate(
    { _id: req.params.id },
    {
      act_nombre,
      act_descripcion,
      precio,
      usr_id,
      act_lugar,
      telefono_contacto,
      ciudad_id
    }
  );
  res.json({ message: "service Updated" });
};

servicesCtrl.deleteService = async (req, res) => {
  const service = await Services.findOneAndDelete(req.params.id);
  res.json({ message: "service deleted", service });
};

servicesCtrl.getServicesByCity = async (req, res) => {
  console.log(req.params)
  const ciudad = await City.findOne({_id:req.params.city_id});
  console.log(ciudad)
  if(ciudad)
  {
    const services = await Services.find({ ciudad_id: ciudad._id });
    res.json(services);
  }
  res.json(new Array(0));
};

servicesCtrl.getServiceByPriceInRange = async (req, res) => {
  const services = await Services.find({
    precio: { $gt: req.params.mayorque, $lt: req.params.menorque }
  });
  res.json(services);
};

servicesCtrl.getMyServices = async (req, res) => {
  const services = await Services.find({ usr_id: req.params.usr_id });
  res.json(services);
};

module.exports = servicesCtrl;
