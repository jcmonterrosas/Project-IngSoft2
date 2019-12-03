import React, { Component } from "react";
import "./Register.css";
import axios from "axios";
import FileBase64 from "react-file-base64";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Nombre: String,
      Contraseña: String,
      Telefono: String,
      Correo: String,
      Identificacion: String,
      TipoDocumento: String,
      Rol: String,
      FechaNacimiento: Date,
      FotoPerfil: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    const target = event.target;
    switch (target.id) {
      case "Nombre":
        this.setState({ Nombre: target.value });
        break;
      case "Telefono":
        this.setState({ Telefono: target.value });
        break;
      case "Correo":
        this.setState({ Correo: target.value });
        break;
      case "Contraseña":
        this.setState({ Contraseña: target.value });
        break;
      case "Identificacion":
        this.setState({ Identificacion: target.value });
        break;
      case "TipoDocumento":
        this.setState({ TipoDocumento: target.value });
        break;
      case "Rol":
        this.setState({ Rol: target.value });
        break;
      case "FechaNacimiento":
        this.setState({ FechaNacimiento: target.value });
        break;
      case "Foto":
        this.setState({ FotoPerfil: target.files[0] });
        break;
      default:
        break;
    }
    console.log(this.state)
  }

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
        console.log("Usuario Registrado");
        console.log(response.data);
        document.location = "/Login";
      })
      .catch(error => {
        console.log("this is error", error);
      });
  };

  handleSubmit(event) {
    this.consultarApi();
    event.preventDefault();
  }

  getFiles(files) {
    this.setState({ imagen: files.base64 });
    console.log(this.state.imagen);
  }

  render() {
    return (
      <div className="Register">
        <form className="RegisterForm" onSubmit={this.handleSubmit}>
          <h1>Crea tu cuenta</h1>
          <label htmlFor="inp" className="inp">
            <input
              type="text"
              id="Nombre"
              placeholder="&nbsp;"
              onChange={this.handleChange}
              autoComplete="off"
              required
            />
            <span className="label">Nombre</span>
            <span className="border"></span>
          </label>
          <label htmlFor="inp" className="inp">
            <input
              type="text"
              id="Contraseña"
              placeholder="&nbsp;"
              onChange={this.handleChange}
              autoComplete="off"
              required
            />
            <span className="label">Contraseña</span>
            <span className="border"></span>
          </label>
          <label htmlFor="inp" className="inp">
            <input
              type="email"
              id="Correo"
              placeholder="&nbsp;"
              onChange={this.handleChange}
              required
            />
            <span className="label">Correo electrónico</span>
            <span className="border"></span>
          </label>
          <label htmlFor="inp" className="inp">
            <input
              type="tel"
              id="Telefono"
              placeholder="&nbsp;"
              pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
              title="Se espera diez numeros, ejemplo: 301 123 4568"
              onChange={this.handleChange}
              required
            />
            <span className="label">Teléfono celular</span>
            <span className="border"></span>
          </label>
          <select
            className="custom-select"
            id="TipoDocumento"
            onChange={this.handleChange}
            required
          >
            <option selected>Tipo</option>
            <option value="C.C">C.C</option>
            <option value="T.I">T.I</option>
            <option value="C.E">C.E</option>
            <option value="P.S">P.S</option>
          </select>
          <label htmlFor="inp" className="inp">
            <input
              type="number"
              id="Identificacion"
              placeholder="&nbsp;"
              onChange={this.handleChange}
              required
              autoComplete="off"
            />
            <span className="label">Identificación</span>
            <span className="border"></span>
          </label>
          <label htmlFor="inp" className="inp">
            <input
              type="date"
              id="FechaNacimiento"
              placeholder="&nbsp;"
              onChange={this.handleChange}
              required
            />
            <span className="label">Fecha de Nacimiento</span>
            <span className="border"></span>
          </label>
          <select
            className="custom-select"
            id="Rol"
            onChange={this.handleChange}
            required
          >
            <option selected>Rol</option>
            <option value="Cliente">Cliente</option>
            <option value="Proveedor">Proveedor</option>
          </select>
          <div className="selectedImage">
            <h6>Foto de Perfil</h6>
            <FileBase64 multiple={false} onDone={this.getFiles.bind(this)} />
            <br />
            <span style={{ color: "red" }} className="label">Solo son válidas imágenes que pesen 100kb o menos</span>
          </div>
          <input
            type="reset"
            className="btn btn-warning btn-lg btn-block"
          />
          <input
            type="submit"
            className="btn btn-warning btn-lg btn-block"
          />
          {/* <div className="jumbotron-fluid Registerbody" align="center">
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
          </div> */}
        </form>
      </div>
    );
  }
}

export default Register;
