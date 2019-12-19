import React from "react";
import "./Services.css";
import { setInStorage, getFromStorage } from "../storage";
import axios from "axios";
import Popup from './PopupReservaHotel'

var usr_id = getFromStorage("id");
var showPopup = false

const Imagen = props => {
  const {
    _id,
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

  async function consultarApi() {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000"
      }
    };

    axios
      .post(
        `https://api-aventurate.herokuapp.com/reserva/additem/${usr_id}`,
        {
          hotel_o_servicio: false,
          ser_id: _id,
          hot_id: "",
          child_quantity: 1,
          adult_quantity: 1,
          DateBegin: "2019-12-01T23:09:28.048+00:00",
          DateEnd: "2019-12-05T23:09:28.048+00:00"
        },
        config
      )
      .then(response => {
        console.log("Done: ", response.data);
      })
      .catch(error => {
        console.log("this is error", error);
      });
  }

  function handleClick(e) {
    e.preventDefault();
    console.log(_id);
    consultarApi();
    showPopup = !showPopup
  }

  function togglePopup() {
    showPopup = !showPopup
  }

  let tipo;
  let contacto;
  if (categoria) {
    tipo = <h4>{categoria}</h4>;
  }
  if (telefono_contacto) {
    contacto = (
      <div>
        <h5>Contacto:</h5>
        <label>{telefono_contacto}</label>{" "}
      </div>
    );
  } else {
    contacto = null;
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
            <label>
              {departamento ? departamento + " - " + ciudad : ciudad}
            </label>
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
          <img src={images}></img>
          <a
            target="_blank"
            className="btn btn-lg btn-warning btn-block"
            onClick={togglePopup}
          >
            Agregar a la reserva
          </a>
        </div>
      </div>
      {showPopup ? 
          <Popup
            closePopup={togglePopup}
            confirmPopup={handleClick}
          />
          : null
      }
    </div>
  );
};

export default Imagen;
