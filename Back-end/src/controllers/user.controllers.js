const userCtrl = {};

const User = require("../models/User");

userCtrl.getUsers = async (req, res) => {
  const user = await User.find(); //Devuelve un arreglo [{}, {}]
  res.json(user);
};

userCtrl.createUser = async (req, res) => {
  const { usr_nombre, usr_telefono, usr_correo, usr_pass, usr_tipo_doc, rol } = req.body;
  const passwordHashed =  hex_md5(usr_pass); // probar esta funcion js
  const newUser = new User({
    usr_nombre,
    usr_telefono,
    usr_correo,
    passwordHashed, // tiene que ser "hasheado", para el login se hace hash de lo que ingrese y se compara. 
    usr_tipo_doc,
    rol
  });
  await newUser.save();
  console.log(newUser);
  res.json({ message: "User Saved" });
};


userCtrl.updateUser = async (req, res) => {
    const { usr_nombre, usr_telefono, usr_correo, usr_pass, usr_tipo_doc, rol } = req.body;
    await User.findOneAndUpdate(
    { _id: req.params.id },
    {
        usr_nombre,
        usr_telefono,
        usr_correo,
        usr_pass, 
        usr_tipo_doc,
        rol
    }
  );
  res.json({ message: "User Updated" });
};

userCtrl.deleteUser = async (req, res) => {
  const user = await User.findOneAndDelete(req.params.id);
  res.json({ message: "User deleted", user });
};

module.exports = userCtrl;
