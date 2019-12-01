import React from "react";

const Imagen = props => {
  const { act_nombre, act_descripcion, images } = props.imagen;

  return (
    <div className="container card containerHotel">
      <div className="row align-items-center">
        <div className="col align-self-center">
          <div className="container ">
            <p className="row titleHotel">
              <bold>{act_nombre}</bold>
            </p>
            <p className="row">
              <bold>Descripcion</bold>
            </p>
            <p className="row">{act_descripcion}</p>
            <p className="row">Vistas</p>
            <p className="row">Muñequitos</p>
          </div>
        </div>

        <div className="col colPrices">
          <div className="container">
            <p className="row">
              <img src={images}></img>{" "}
            </p>
            <p className="row">para personas</p>
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
