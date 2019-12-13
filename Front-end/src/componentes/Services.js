import React from "react";
import "./Services.css"

const Imagen = props => {

  const {
    act_nombre,
    act_descripcion,
    precio,
    ciudad,
    images,
    telefono_contacto,
    categoria,
    departamento,
    direccion
  } = props.imagen;

  let tipo;
  let contacto;
  if (categoria) {
    tipo = <h4>{categoria}</h4>
  }
  if (telefono_contacto) {
    contacto = <div><h5>Contacto:</h5><label>{telefono_contacto}</label> </div>
  }else{
    contacto = null
  }

  return (
    <div className="card container">
      <div className="contCard">
        <div className="colItems">
          {tipo}
          <div>
            <h5>Descripción: </h5>
            <label>{act_descripcion}</label>
          </div>
          <div>
            <h5>Ubicación: </h5>
            <label>{departamento ? departamento + " - " + ciudad : ciudad}</label>
            <br />
            <label>{direccion} </label>
          </div>
          {contacto}
          <div>
            <h5>Precio: </h5>
            <label>{"$ " + precio}</label>
          </div>
        </div>
        <div className="colPrices">
          <h2>{act_nombre}</h2>
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
