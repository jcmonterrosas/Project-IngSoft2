import React, { Component } from "react";
import "./Reservas.css";
import foto from "./img/Octocat.png";
import person from "./img/person.png";
import tel from "./img/tel.png";
import mail from "./img/mail.png";
import axios from "axios";
import { getFromStorage } from "./storage";

var pass = getFromStorage("pass");
var rolUser = getFromStorage("rol");
var tipo_doc = getFromStorage("tipo_doc");
var identificacion = getFromStorage("identificacion");

class TReservas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: getFromStorage("nombre"),
      email: getFromStorage("correo"),
      tel: getFromStorage("telefono"),
      tnombre: getFromStorage("nombre"),
      temail: getFromStorage("correo"),
      ttel: getFromStorage("telefono"),
      id: getFromStorage("id"),
      fecha: "1998-05-21",
      editar: false
    };

    this.click = this.click.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.saveChange = this.saveChange.bind(this);
  }

  click(e) {
    this.setState({ editar: !this.state.editar });
    console.log(this.state.editar);
  }

  handleChange(event) {
    const target = event.target;
    switch (target.id) {
      case "Nombre":
        this.setState({ tnombre: target.value });
        break;
      case "Email":
        this.setState({ temail: target.value });
        break;
      case "Telefono":
        this.setState({ ttel: target.value });
        break;
      default:
        break;
    }
  }

  saveChange() {
    this.setState({ nombre: this.state.tnombre });
    this.setState({ email: this.state.temail });
    this.setState({ tel: this.state.ttel });
    this.setState({ editar: false });

    this.consultarApi();
  }

  consultarApi = async () => {
    console.log(this.state);
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000"
      }
    };
    axios
      .put(
        `https://api-aventurate.herokuapp.com/user/${this.state.id}`,
        {
          usr_nombre: this.state.tnombre,
          usr_telefono: this.state.ttel,
          usr_correo: this.state.temail,
          usr_pass: pass,
          usr_tipo_doc: tipo_doc,
          usr_identificacion: identificacion,
          usr_rol: rolUser
        },
        config
      )
      .then(response => {
        console.log("Done: ", response.data);
        window.location.reload();
      })
      .catch(error => {
        console.log("this is error", error);
      });
  };

  render() {
    var formV = "cambiarDatos";
    var Info = "noEdit";
    var dis = false;
    if (this.state.editar) {
      formV = "inp";
      Info = "edit";
      dis = true;
    }
    const style = this.state.editar ? { height: "520px" } : {};
    const style2 = this.state.editar ? { height: "38%" } : {};
    const style3 = this.state.editar ? { height: "62%" } : {};
    const style4 = this.state.editar ? {} : { display: "none" };

    return (
      <div className="TarjetaPerfil container" style={style}>
        <div className="HeaderTarjeta row align-items-center" style={style2}>
          <div className="col-3">
            <div className="ImagenPerfil ">
              <img src={foto} width="100%" height="auto" alt="Foto"/>
            </div>
          </div>
          <div className="DatosPerfil col">
            <br></br>
            <p className="Amerika">{this.state.nombre}</p>
            <p className="Aller mail">{this.state.email} &#10004;</p>
          </div>
          <div className="col align-self-center">
            <button
              className="EditarB "
              type="button"
              onClick={this.click}
              disabled={dis}
            >
              Editar
            </button>
          </div>
        </div>
        <div
          className="InfoTarjeta row align-items-center container"
          style={style3}
        >
          <div className="row linea1">
            <div className="col-6">
              <div className={Info + " LogoInfo"}>
                <img src={person} width="100%" height="auto" alt="Person"/>
              </div>
              <p className={Info + " Aller"}>DATOS PERSONALES</p>
              <p className={Info + " Aller sub"}>{this.state.nombre}</p>
              <label for="inp" className={formV}>
                <input
                  type="text"
                  id="Nombre"
                  placeholder="&nbsp;"
                  value={this.state.tnombre}
                  onChange={this.handleChange}
                  autoComplete="off"
                />
                <span className="label">NOMBRE</span>
                <span className="border"></span>
                <p className="Aller sub datae">
                  <strong>Id:</strong>
                  {this.state.id}
                </p>
                <p className="Aller sub datae">
                  <strong>Fecha de nacimiento:</strong>
                  {this.state.fecha}
                </p>
              </label>
            </div>
            <div className="col-6">
              <div className={Info + " LogoInfo"}>
                <img src={mail} width="100%" height="auto" alt="Mail"/>
              </div>
              <p className={Info + " Aller"}>EMAIL</p>
              <p className={Info + " Aller sub"}>{this.state.email}</p>
              <label for="inp" className={formV}>
                <input
                  type="text"
                  id="Email"
                  placeholder="&nbsp;"
                  value={this.state.temail}
                  onChange={this.handleChange}
                  autoComplete="off"
                />
                <span className="label">EMAIL</span>
                <span className="border"></span>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className={Info + " LogoInfo"}>
                <img src={tel} width="100%" height="auto" alt="Telefono"/>
              </div>
              <p className={Info + " Aller"}>TELEFONO</p>
              <p className={Info + " Aller sub"}>{this.state.tel}</p>
              <label for="inp" className={formV}>
                <input
                  type="text"
                  id="Telefono"
                  placeholder="&nbsp;"
                  value={this.state.ttel}
                  onChange={this.handleChange}
                  autoComplete="off"
                />
                <span className="label">TELEFONO</span>
                <span className="border"></span>
              </label>
            </div>
            <div className="col">
              <button
                className="guardarB"
                type="button"
                onClick={this.saveChange}
                style={style4}
              >
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TReservas;
