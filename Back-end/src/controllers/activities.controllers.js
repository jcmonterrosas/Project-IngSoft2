const activitiesCtrl = {};

const Activities = require("../models/Activities");

activitiesCtrl.getActivity = async (req, res) => {
  const activities = await Activities.find(); //Devuelve un arreglo [{}, {}]
  res.json(activities);
};

activitiesCtrl.createActivity = async (req, res) => {
    const { act_nombre, act_descripcion, precio, cedula_responsable, act_direccion, 
        direccion_contacto, telefono_contacto, ciudad, nombre_responsable } = req.body;
    const newActivity = new Activities({
        act_nombre,
        act_descripcion, 
        precio,
        cedula_responsable,
        act_direccion,
        direccion_contacto,
        telefono_contacto,
        ciudad,
        nombre_responsable
    });
    await newActivity.save();
    console.log(newActivity);
    res.json({ message: "Activity Saved" });
};


activitiesCtrl.updateActivity = async (req, res) => {
    const { act_nombre, act_descripcion, precio, cedula_responsable, act_direccion, 
        direccion_contacto, telefono_contacto, ciudad, nombre_responsable } = req.body;
  await Activities.findOneAndUpdate(
    { _id: req.params.id },
    {
        act_nombre,
        act_descripcion, 
        precio,
        cedula_responsable,
        act_direccion,
        direccion_contacto,
        telefono_contacto,
        ciudad,
        nombre_responsable
    }
  );
  res.json({ message: "Activity Updated" });
};

activitiesCtrl.deleteActivity = async (req, res) => {
  const activity = await Activities.findOneAndDelete(req.params.id);
  res.json({ message: "Activity deleted", activity });
};

activitiesCtrl.getActivityByCity = async (req, res) => {
    const activities = await Activities.find( {ciudad : req.params.ciudad});
    res.json(activities );
  };

activitiesCtrl.getActivityByPriceInRange = async (req, res) => {
    const activities = await Activities.find( { precio: { $gt: req.params.mayorque, $lt: req.params.menorque } });
    res.json(activities );
};

module.exports = activitiesCtrl;
