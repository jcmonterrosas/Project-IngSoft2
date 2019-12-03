import React from "react";

const Imagen = props => {
  const {
    name,
    departamento,
    ciudad,
    address,
    price_per_person,
    acommodation,
    phone,
    images
  } = props.imagen;

  return (
    <div className="container card containerHotel">
      <div className="row align-items-center">
        <div className="col align-self-center">
          <div className="container ">
            <p className="row titleHotel">
              <bold>{name}</bold>
            </p>
            <p className="row">Departamento: {departamento}</p>
            <p className="row">Ciudad: {ciudad}</p>
            <p className="row">Direccion: {address}</p>
            <p className="row">Acomodación Disponible: {acommodation}</p>
            <p className="row">Contacto: {phone}</p>
          </div>
        </div>

        <div className="col colPrices">
          <div className="container">
            <p className="row">
              <img src={images} width="300px" height="150px"></img>{" "}
            </p>
            <p className="row">Precio por persona: ${price_per_person}</p>
            <a
              href="#"
              target="_blank"
              className="btn btn-lg btn-warning btn-block"
            >
              {" "}
              Ver detalles
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imagen;
