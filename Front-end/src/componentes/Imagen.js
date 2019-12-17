import React from "react";
import "./Services.css"

const Imagen = props => {
  const {
    name,
    departamento,
    ciudad,
    address,
    price_per_person,
    acommodation,
    phone,
    images,
    hab_ind,
    hab_dob,
    hab_fam,
    hab_mul
  } = props.imagen;


  let contacto, acomodacion;
  let cantHabInd, cantHabDob, cantHabFam, cantHabMul;
  if (phone) {
    contacto = <div><h5>Contacto:</h5><label>{phone}</label></div>
  } else {
    contacto = null
  }
  if (hab_ind) {
    cantHabInd = <label>{"Individuales: " + hab_ind}</label>
  }
  if (hab_dob) {
    cantHabDob = <label>{"Dobles: " + hab_dob}</label>
  }
  if (hab_fam) {
    cantHabFam = <label>{"Familiares: " + hab_fam}</label>
  }
  if (hab_mul) {
    cantHabMul = <label>{"Multiples: " + hab_mul}</label>
  }
  if (acommodation) {
    acomodacion = <div><h5>Habitaciones disponibles:</h5>{cantHabInd}<br/>{cantHabDob}<br/>{cantHabFam}<br/>{cantHabMul}</div>
  }

  return (
    <div className="card container">
      <div className="contCard">
        <div className="colItems">
          <div>
            <h5>Ubicación: </h5>
            <label>{departamento ? departamento + " - " + ciudad : ciudad}</label>
            <br />
            <label>{address} </label>
          </div>
          {contacto}
          {acomodacion}
          <div>
            <h5>Precio: </h5>
            <label>{"$ " + price_per_person}</label>
          </div>
        </div>
        <div className="colPrices">
          <h2>{name}</h2>
          <img src={images} ></img>
          <a
            href="#"
            target="_blank"
            className="btn btn-lg btn-warning btn-block"
          >
            Agregar a la reserva
        </a>
        </div>
      </div>
    </div>
  );
};

export default Imagen;
