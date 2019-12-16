const resCtrl = {};

const Reserva = require("../models/Reserva");
const Services = require("../models/Services");
const Hotels = require("../models/Hotel");
const ItemReservaTemporal = require("../models/ItemReservaTemporal");
const ItemReserva = require("../models/ItemReserva");
const User = require("../models/User");

// metodos para agregar item temporal, recibe el id del hotel o de la actividad para poder agregar las cosas addItemTemporal
// metodo para quitar item temporal, solo con id, deleteItemTemporal
// metodo para actualizar item temporal, borrar y agregar de nuevo
// metodo para crear reserva, debe agregar los item temporarl a itemreserva y borrarlos. createReserva
// metodo para borrar reserva, deleteReserva
// cancelar reserva, cancelReserva
// obtener mis reservas, getMyReservas
// obtener item temporales, getTemporalItems

resCtrl.addItemTemporal = async (req, res) => {

  var user_id = req.params.usr_id;
  const {
    hotel_o_servicio,
    ser_id,
    hot_id,
    child_quantity,
    adult_quantity,
    DateBegin,
    DateEnd
  } = req.body;

  console.log(req.body)

  if(hotel_o_servicio === false)
  {
    var service = await Services.findById(ser_id);
    // no se tienen en cuenta ninos menores de 12, de resto son adultos
    if(service)
    {
      
      var name = service.act_nombre;
      var usr_id_responsable = service.usr_id;
      var nombre_responsable = '';
      var user_responsable = await User.findById(usr_id_responsable);
      if(user_responsable)
      {
        nombre_responsable = user_responsable.usr_nombre;
      }
      var departamento = service.departamento;
      var city = service.ciudad;
      var address = service.direccion;
      var contact_phone = service.telefono_contacto;
      var address = service.act_lugar;
      var price = adult_quantity * service.precio;
      var images = service.images;
      var categoria = service.categoria;
      var description = service.act_descripcion;
      var act_lugar = service.act_lugar;

      const newItemTemporal = new ItemReservaTemporal({
        user_id,
        hotel_o_servicio,
        child_quantity,
        adult_quantity,
        name,
        usr_id_responsable,
        nombre_responsable,
        departamento,
        city,
        address,
        contact_phone,
        price,
        images,
        DateBegin,
        DateEnd,
        ser_id,
        categoria,
      description,
      act_lugar
      });
      await newItemTemporal.save();
      console.log(newItemTemporal);
      res.json( { 
        Error : false,
        ErrorMsg : 'Se agregó correctamente'
      });
    }
    else
    {
      res.json( { 
        Error : true,
        ErrorMsg : 'No se encontró el servicio o actividad.'
      });
    }
    
  }
  else if(hotel_o_servicio === true)
  {
    var hotel = await Hotels.findById(hot_id);

    // no se tienen en cuenta ni;os menores de 12 para el precio ni acomodacion
    if(hotel)
    {

      var name = hotel.name;
      var usr_id_responsable = hotel.usr_id;
      var nombre_responsable = '';
      var user_responsable = await User.findById(usr_id_responsable);
      if(user_responsable)
      {
        nombre_responsable = user_responsable.usr_nombre;
      }
      var departamento = hotel.departamento;
      var city = hotel.ciudad;
      var address = hotel.address;
      var contact_phone = hotel.phone;
      var price = adult_quantity * hotel.price_per_person;
      var images = hotel.images;
      var accommodation = hotel.accommodation;
      var hab_ind = hotel.hab_ind;
      var hab_dob = hotel.hab_dob;
      var hab_fam = hotel.hab_fam;
      var hab_mul = hotel.hab_fam;

      const newItemTemporal = new ItemReservaTemporal({
        user_id,
        hotel_o_servicio,
      child_quantity,
      adult_quantity,
      name,
      usr_id_responsable,
      nombre_responsable,
      departamento,
      city,
      address,
      contact_phone,
      price,
      images,
      DateBegin,
      DateEnd,
      hot_id,
      accommodation,
      hab_ind,
      hab_dob,
      hab_fam,
      hab_mul
      });
      await newItemTemporal.save();
      console.log(newItemTemporal);
      res.json( { 
        Error : false,
        ErrorMsg : 'Se agregó correctamente'
      });
    }
    else
    {
      res.json( { 
        Error : true,
        ErrorMsg : 'No se encontró el servicio o la actividad.'
      });
    }
      
  }
  else
  {
    res.json( { 
      Error : true,
      ErrorMsg : 'Debe agregar un servicio o un hotel.'
    });
  }
  
};

resCtrl.deleteItemTemporal = async (req, res) => {
  const item = await ItemReservaTemporal.findByIdAndDelete(req.params.id);
  res.json({ message: "item deleted", item });
};


resCtrl.createReserva = async (req, res) => {
  var user = await User.findById(req.params.usr_id);
  if(user)
  {

    var itemList = await ItemReservaTemporal.find({user_id: user._id});

    var priceTotal = 0;
    for (var i = 0; i < itemList.length; i++) {
      priceTotal += parseFloat(itemList[i].price);
    }

    var iva = priceTotal * 0.19;
    var pricee = priceTotal - iva;

    const {
        name
      } = req.body;

    var newReserva =  new Reserva(
      {
        usr_id: user._id,
        name: name,
        price_total: priceTotal,
        price_exclude_iva: pricee
      }
    )

    await newReserva.save();

    if(itemList)
    {
      for(var i = 0; i < itemList.length; i++)
      {
        var item = itemList[i];

        var newItem = new ItemReserva(
          {
            res_id: newReserva._id,
            user_id: item.user_id,
            hotel_o_servicio: item.hotel_o_servicio,
            child_quantity : item.child_quantity,
            adult_quantity : item.adult_quantity,
            name: item.name,
            usr_id_responsable: item.usr_id_responsable,
            nombre_responsable: item.nombre_responsable,
            departamento: item.departamento,
            city: item.city,
            address: item.address,
            contact_phone: item.contact_phone,
            price: item.price,
            images: item.images,
            DateBegin : item.DateBegin,
            DateEnd : item.DateEnd,
            ser_id: item.ser_id,
            categoria: item.categoria,
            description: item.description,
            act_lugar: item.act_lugar,
            hot_id: item.hot_id,
            accommodation : item.accommodation,
            hab_ind: item.hab_ind,
            hab_dob: item.hab_dob,
            hab_fam: item.hab_fam,
            hab_mul: item.hab_mul
          }
        )
        await newItem.save();
        await ItemReservaTemporal.findByIdAndDelete(item._id);
      }
      res.json( { 
        Error : false,
        ErrorMsg : 'Reserva creada correctamente.',
        Reserva : newReserva,
        Items: itemList
      });
    }
    else
    {
      res.json( { 
        Error : true,
        ErrorMsg : 'No se encontraron hoteles ni actividades'
      });
    }
  }
  else
  {
    res.json( { 
      Error : true,
      ErrorMsg : 'No se encontró el usuario'
    });
  }
};


resCtrl.deleteReserva = async (req, res) => {
  const reserva = await Reserva.findByIdAndDelete(req.params.id);
  var items = await ItemReserva.find({res_id : reserva._id});
  for(var item in items)
  {
    await ItemReserva.findByIdAndDelete(item._id);
  }
  res.json({ message: "reserva deleted", reserva });
};

resCtrl.cancelReserva = async (req, res) => {
  console.log("entro")
  await Reserva.findOneAndUpdate(
    { _id: req.params.id },
    {
      state : "Cancelada"
    }
  );
  res.json({ message: "reserva cancelada" });
};

// obtener mis reservas, getMyReservas

resCtrl.getMyReservas = async (req, res) => {
  const reservas = await Reserva.find({usr_id : req.params.usr_id});
  res.json(reservas);
};

resCtrl.getReserva = async (req, res) => {
  const reserva = await Reserva.findById(req.params.id);
  if(reserva)
  {
    const detalleReserva = await ItemReserva.find({res_id: req.params.id});
    if(detalleReserva)
    {
      res.json( { 
        Error : false,
        ErrorMsg : '',
        Reserva: reserva,
        DetalleReserva : detalleReserva
      });
    }
    else
    {
      res.json( { 
        Error : true,
        ErrorMsg : 'Detalle de reserva no encontrado',
        Reserva: null,
        DetalleReserva : null
      });
    }
  }
  else
  {
    res.json( { 
      Error : true,
      ErrorMsg : 'Reserva no encontrada',
      Reserva: null,
      DetalleReserva : null
    });
  }
  
};

resCtrl.getTemporalItems = async (req, res) => {

  const items = await ItemReservaTemporal.find({user_id:req.params.usr_id});
  res.json( { 
    Error : false,
    ErrorMsg : '',
    Items: items
  });
  
};

module.exports = resCtrl;
