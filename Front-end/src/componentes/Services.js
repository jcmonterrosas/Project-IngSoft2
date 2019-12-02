import React from "react";

const Imagen = props => {
  const {
    act_nombre,
    act_descripcion,
    precio,
    ciudad,
    images,
    telefono_contacto,
    categoria,
    departamento
  } = props.imagen;

  return (
    <div className="container card containerHotel">
      <div className="row align-items-center">
        <div className="col align-self-center">
          <div className="container ">
            <p className="row titleHotel">
              <bold>{act_nombre}</bold>
            </p>
            <p className="row">Descripcion: {act_descripcion}</p>
            <p className="row">Precio: $ {precio}</p>
            <p className="row">Tipo: {categoria}</p>
            <p className="row">Departamento: {departamento}</p>
            <p className="row">Ciudad: {ciudad}</p>
          </div>
        </div>

        <div className="col colPrices">
          <div className="container">
            <p className="row">
              <img src={images} widht="300px" height="150px"></img>
            </p>
            <p className="row">{telefono_contacto}</p>
            <a
              href="#"
              target="_blank"
              className="btn btn-lg btn-warning btn-block"
            >
              Ver detalles
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imagen;
