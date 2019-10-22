const rolCtrl = {};

const Rol = require("../models/Rol");

rolCtrl.getRol = async (req, res) => {
  const roles = await Rol.find(); //Devuelve un arreglo [{}, {}]
  res.json(roles);
};

rolCtrl.getRolId = async (req, res) => {
  const roles = await Rol.find({ _id: req.params.id }); //Devuelve un arreglo [{}, {}]
  res.json(roles);
};

rolCtrl.createRol = async (req, res) => {
  const { rol_name } = req.body;
  const newRol = new Rol({
    rol_name
  });
  await newRol.save();
  console.log(newRol);
  res.json({ message: "Rol Saved" });
};


rolCtrl.updateRol = async (req, res) => {
  const { rol_name } = req.body;
  await Rol.findOneAndUpdate(
    { _id: req.params.id },
    {
      rol_name
    }
  );
  res.json({ message: "Rol Updated" });
};

rolCtrl.deleteRol = async (req, res) => {
  const rol = await Rol.findOneAndDelete(req.params.id);
  res.json({ message: "Rol deleted", rol });
};

module.exports = rolCtrl;
