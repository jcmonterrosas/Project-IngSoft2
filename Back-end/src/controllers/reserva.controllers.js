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

resCtrl.addItemTemporal = async (req, res) => {

  
  const {
    ser_id,
    usr_id,
    hot_id,
    child_quantity,
    adult_quantity,
    DateBegin,
    DateEnd
  } = req.body;

  if(ser_id)
  {
    var service = await Services.findById(ser_id);

    if(service)
    {
      var name = service.act_nombre;
      var description = service.act_descripcion;
      var address = service.act_lugar;
      var contact_phone = service.telefono_contacto;
      var city = service.ciudad;
      var price = adult_quantity * service.precio;


      const newItemTemporal = new ItemReservaTemporal({
        ser_id,
        usr_id,
      name,
      description,
      address,
      contact_phone,
      city,
      child_quantity,
      price,
      adult_quantity,
      DateBegin,
      DateEnd // doble, etc
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
  else if(hot_id)
  {
    var hotel = await Hotels.findById(hot_id);
    if(hotel)
    {

      var name = hotel.name;
      var accommodation = hotel.acommodation;
      var address = hotel.address;
      var contact_phone = hotel.phone;
      var city = hotel.ciudad;
      var price = adult_quantity * hotel.price_per_person;


      const newItemTemporal = new ItemReservaTemporal({
        hot_id,
        usr_id,
      name,
      accommodation,
      address,
      contact_phone,
      city,
      child_quantity,
      price,
      adult_quantity,
      DateBegin,
      DateEnd // doble, etc
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
    var itemList = await ItemReservaTemporal.find({usr_id: user._id});
    var priceTotal = 0;
    for(var itt in itemList)
    {
      priceTotal += itt.price;
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
      for(var item in itemList)
      {
        var newItem = new ItemReserva(
          {
            ser_id: item.ser_id,
            usr_id: user._id,
            hot_id: item.hot_id,
            res_id: newReserva._id,
            name: item.name,
            description: item.description,
            price: item.price,
            address: item.address,
            contact_phone: item.contact_phone,
            city: item.city,
            child_quantity : item.child_quantity,
            adult_quantity : item.adult_quantity,
            accommodation : item.accommodation,
            DateBegin : item.DateBegin,
            DateEnd : item.DateEnd
          }
        )
        await newItem.save();
        await ItemReservaTemporal.findByIdAndDelete(item._id);
      }
      res.json( { 
        Error : false,
        ErrorMsg : 'Reserva creada correctamente.'
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
  await Hotel.findOneAndUpdate(
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


module.exports = resCtrl;
