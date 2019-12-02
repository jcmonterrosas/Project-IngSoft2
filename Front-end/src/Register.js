import React, { Component } from "react";
import "./Register.css";
import Btnprincipal from "./componentes/btn-cambio";
import axios from "axios";

class Register extends Component {
  state = {
    Nombre: String,
    Contraseña: String,
    Telefono: String,
    Correo: String,
    Identificacion: String,
    TipoDocumento: String,
    Rol: String,
    FechaNacimiento: Date
  };

  valueToState = ({ value, id }) => {
    switch (id) {
      case "Nombre":
        this.setState({ Nombre: value });
        break;
      case "Telefono":
        this.setState({ Telefono: value });
        break;
      case "Correo":
        this.setState({ Correo: value });
        break;
      case "Contraseña":
        this.setState({ Contraseña: value });
        break;
      case "Identificacion":
        this.setState({ Identificacion: value });
        break;
      case "TipoDocumento":
        this.setState({ TipoDocumento: value });
        break;
      case "Rol":
        this.setState({ Rol: value });
        break;
      case "FechaNacimiento":
        this.setState({ FechaNacimiento: value });
        break;
    }
    console.log(this.state);
  };

  consultarApi = async () => {
    axios
      .post(`https://api-aventurate.herokuapp.com/user/`, {
        usr_nombre: this.state.Nombre,
        usr_telefono: this.state.Telefono,
        usr_correo: this.state.Correo,
        usr_pass: this.state.Contraseña,
        usr_tipo_doc: this.state.TipoDocumento,
        usr_identificacion: this.state.Identificacion,
        usr_rol: this.state.Rol
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log("this is error", error);
      });
  };

  render() {
    return (
      <div className="Register">
        <form className="row">
          <div className="jumbotron-fluid Registerbody" align="center">
            <div className="row">
              <div className="col-12" align="center">
                <h1>Crea tu cuenta</h1>
              </div>
            </div>
            <div className="row campos">
              <div className="col-6" align="center">
                <label htmlFor="inp" className="inp">
                  <input
                    type="text"
                    id="Nombre"
                    placeholder="&nbsp;"
                    onChange={event => this.valueToState(event.target)}
                    autoComplete ="off"
                  />
                  <span className="label">Nombre</span>
                  <span className="border"></span>
                </label>
              </div>
              <div className="col-6" align="center">
                <label htmlFor="inp" className="inp">
                  <input
                    type="password"
                    id="Contraseña"
                    placeholder="&nbsp;"
                    onChange={event => this.valueToState(event.target)}
                  />
                  <span className="label">Contraseña</span>
                  <span className="border"></span>
                </label>
              </div>
              <div />
            </div>
            <div className="row campos">
              <div className="col-6" align="center">
                <label htmlFor="inp" className="inp">
                  <input
                    type="email"
                    id="Correo"
                    placeholder="&nbsp;"
                    onChange={event => this.valueToState(event.target)}
                  />
                  <span className="label">Correo</span>
                  <span className="border"></span>
                </label>
              </div>
                <div className="col-6" align="center">
                  <label htmlFor="inp" className="inp">
                    <input
                      type="tel"
                      id="Telefono"
                      placeholder="&nbsp;"
                      onChange={event => this.valueToState(event.target)}
                    />
                    <span className="label">Teléfono</span>
                    <span className="border"></span>
                  </label>
                </div>
              <div />
            </div>
            <div className="row campos">
              <div className="input-group mb-3 col-6">
                <select
                  className="custom-select inp"
                  id="TipoDocumento"
                  onChange={event => this.valueToState(event.target)}
                >
                  <option selected>Tipo</option>
                  <option value="C.C">C.C</option>
                  <option value="T.I">T.I</option>
                  <option value="C.E">C.E</option>
                  <option value="P.S">P.S</option>
                </select>
              </div>
              <div className="input-group mb-3 col-6">
                <label htmlFor="inp" className="inp">
                  <input
                    type="number"
                    id="Identificacion"
                    placeholder="&nbsp;"
                    onChange={event => this.valueToState(event.target)}
                  />
                  <span className="label">Identificación</span>
                  <span className="border"></span>
                </label>
              </div>
            </div>
            <div className="row campos">
              <div className="input-group mb-3 col-6">
                <label htmlFor="inp" className="inp">
                  <input
                    type="date"
                    id="FechaNacimiento"
                    placeholder="&nbsp;"
                    onChange={event => this.valueToState(event.target)}
                  />
                  <span className="label">Fecha de Nacimiento</span>
                  <span className="border"></span>
                </label>
              </div>
              <div className="input-group mb-3 col-6">
                <select
                  className="custom-select inp"
                  id="Rol"
                  onChange={event => this.valueToState(event.target)}
                >
                  <option selected>Rol</option>
                  <option value="Cliente">Cliente</option>
                  <option value="Proveedor">Proveedor</option>
                </select>
              </div>
              <div />
            </div>
            <div className="row">
              <div className="input-group mb-3 col-6">
                <button
                  type="reset"
                  className="btn btn-warning btn-lg btn-block"
                >
                  Restablecer
                </button>
              </div>
              <div className="input-group mb-3 col-6">
                <button
                  type="button"
                  className="btn btn-warning btn-lg btn-block"
                  onClick={this.consultarApi}
                >
                  Registrarse
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
