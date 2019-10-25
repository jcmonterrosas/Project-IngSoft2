const MD5 = require('pure-md5');

const userCtrl = {};

const User = require("../models/User");
const UserSession = require("../models/UserSession");


userCtrl.getUsers = async (req, res) => {
  console.log("si");

  const user = await User.find(); //Devuelve un arreglo [{}, {}]
  console.log(user);
  res.json(user);
};

userCtrl.register = async (req, res) => {
  const {
    usr_nombre,
    usr_telefono,
    usr_correo,
    usr_pass,
    usr_tipo_doc,
    usr_identificacion,
    usr_rol
  } = req.body;
  const passwordHashed = MD5.md5(usr_pass);
  const newUser = new User({
    usr_nombre,
    usr_telefono,
    usr_correo,
    usr_pass : passwordHashed, 
    usr_tipo_doc,
    usr_identificacion,
    usr_rol
  });

  const user = await User.find({ usr_correo: req.body.usr_correo });

  if(user && user[0])
  {
    res.json( { 
      Error : true,
      ErrorMsg : 'El correo que intenta registrar ya existe',
      RegisteredUser: user,
    });
  }
  else
  {
    await newUser.save();
    console.log(newUser);
    res.json({ message: "User Saved" });
  }
  
};

userCtrl.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  console.log(user);
  res.json({ user });
};

userCtrl.updateUser = async (req, res) => {
  const {
    usr_nombre,
    usr_telefono,
    usr_correo,
    usr_pass, 
    usr_tipo_doc,
    usr_identificacion,
    usr_rol
  } = req.body;

  const passwordHashed = MD5.md5(usr_pass);

  await User.findOneAndUpdate(
    { _id: req.params.id },
    {
      usr_nombre,
      usr_telefono,
      usr_correo,
      usr_pass : passwordHashed, 
      usr_tipo_doc,
      usr_identificacion,
      usr_rol
    }
  );
  res.json({ message: "User Updated" });
};

userCtrl.deleteUser = async (req, res) => {
  const user = await User.findOneAndDelete(req.params.id);
  res.json({ message: "User deleted", user });
};

userCtrl.getUserByEmail = async (req, res) => {
  const user = await User.find({ usr_correo: req.body.usr_correo });
  res.json( user);
};

userCtrl.login = async (req, res) => {
  const user = await User.find({ usr_correo: req.body.usr_correo });
  const passwordHash = MD5.md5(req.body.usr_pass);
  if( user && user[0])
  {
    if(user[0].usr_pass === passwordHash)
    {
      const newSession = new UserSession(
        {
          usr_id : user[0]._id
        }
      );
      newSession.save((err, doc) => {
        if (err) {
          res.json( { 
            Error : true,
            ErrorMsg : err.message,
            User: user,
            Token: null
          });
        }

        res.json( { 
          Error : false,
          ErrorMsg : '',
          User: user,
          Token: doc._id
        });

      });
    }
    else
    {
      res.json( { 
        Error : true,
        ErrorMsg : 'Contraseña incorrecta',
        User: null,
        Token : null
      });
    }
    
  }
  else
  {
    res.json( { 
      Error : true,
      ErrorMsg: 'Usuario no encontrado',
      User: null,
      Token : null
    });
  }
};

userCtrl.logout = async (req, res) => {

  await UserSession.findOneAndUpdate(
    { _id: req.params.token },
    {
      isDeleted : true
    }
  );
  res.json({ message: "User logout, succesfull" });
};

userCtrl.verify = async (req, res) => {
  const userSession = await UserSession.findById(req.params.token);

  if(userSession && !userSession.isDeleted)
  {
    const user = await User.findById(userSession.usr_id);
    res.json({ 
        UserLogon : true,
        User: user
    });

  }
  else
  {
    res.json({ 
      UserLogon : false,
      User : null
    });
  }
};



module.exports = userCtrl;
