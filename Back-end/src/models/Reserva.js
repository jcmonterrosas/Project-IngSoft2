const mongoose = require("mongoose");
const { Schema } = mongoose;

const ResSchema = new Schema({
  act_actividad: { type: String, required: true },
  act_descripcion: { type: String, required: true },
  numero_reserva: { type: String, required: true }, // se agrupa por este numero, hay que generar el numero aleatorio, por cada actividad se agrega una reserva.
  valor_actividad: { type: String, required: true }, // suma de este da el total mas el precio del hotel
  fecha_inicio_act: { type: String, required: true },
  cedula_cliente: { type: String, required: true },
  cedula_prov: { type: String, required: true },
  numero_personas: { type: String, required: true },
  act_direccion: { type: String, required: true },
  telefono_contacto: { type: String, required: true },
  direccion_contacto: { type: String, required: true },
  responsable: { type: String, required: true },
  telefono_responsable: { type: String, required: true },
  direccion_responsable: { type: String, required: true },
  fecha_fin_act: { type: String, required: true },
  nombre_hotel: { type: String, required: true },
  direccion_hotel: { type: String, required: true },
  ciudad_hotel: { type: String, required: true },
  acomodacion: { type: String, required: true },
  precio_hotel: { type: String, required: true },
  telefono_hotel: { type: String, required: true },
  nombre_hotel: { type: String, required: true },
  origen: { type: String, required: true },
  destino: { type: String, required: true },
  adultos: { type: String, required: true },
  ninos: { type: String, required: true },
  estado: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Reserva", ResSchema);
