const servicesCtrl = {};

const Services = require("../models/Services");

servicesCtrl.getServices = async (req, res) => {
  const services = await Services.find(); //Devuelve un arreglo [{}, {}]
  res.json(services);
};

servicesCtrl.createService = async (req, res) => {
  const {
    act_nombre,
    act_descripcion,
    precio,
    categoria,
    usr_id,
    act_lugar,
    departamento,
    telefono_contacto,
    ciudad,
    direccion,
    images
  } = req.body;
  const newService = new Services({
    act_nombre,
    act_descripcion,
    precio,
    categoria,
    usr_id,
    act_lugar,
    departamento,
    telefono_contacto,
    ciudad,
    direccion,
    images
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
    categoria,
    usr_id,
    act_lugar,
    departamento,
    telefono_contacto,
    ciudad,
    direccion,
    images
  } = req.body;
  await Services.findOneAndUpdate(
    { _id: req.params.id },
    {
      act_nombre,
      act_descripcion,
      precio,
      categoria,
      usr_id,
      act_lugar,
      departamento,
      telefono_contacto,
      ciudad,
      direccion,
      images
    }
  );
  res.json({ message: "service Updated" });
};

servicesCtrl.deleteService = async (req, res) => {
  const service = await Services.findOneAndDelete(req.params.id);
  res.json({ message: "service deleted", service });
};

servicesCtrl.getServicesByCity = async (req, res) => {
  var queryParameter = ".*" + req.params.ciudad.substring(0, 4) + ".*";
  const services = await Services.find({ ciudad: { $regex: queryParameter } });
  res.json(services);
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
