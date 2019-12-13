import React, { Component } from "react";
import "./ProviderLoadData.css";
import axios from "axios";

import FileBase64 from "react-file-base64";

class ProviderActivities extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: String,
      descripcion: String,
      tipo: String,
      departamento: String,
      ciudad: String,
      direccion: String,
      precio: Number,
      personas: Number,
      transporte: false,
      comida: false,
      niños: false,
      guia: false,
      tel_contacto: String,
      imagen: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getFiles(files) {
    this.setState({ imagen: files.base64 });
    console.log(this.state.imagen);
  }

  handleChange(event) {
    const target = event.target;
    switch (target.id) {
      case "Nombre":
        this.setState({ nombre: target.value });
        break;
      case "Tipo":
        this.setState({ tipo: target.value });
        break;
      case "Descripcion":
        this.setState({ descripcion: target.value });
        break;
      case "Departamento":
        this.setState({ departamento: target.value });
        break;
      case "Ciudad":
        this.setState({ ciudad: target.value });
        break;
      case "Direccion":
        this.setState({ direccion: target.value });
        break;
      case "Precio":
        this.setState({ precio: target.value });
        break;
      case "Personas":
        this.setState({ personas: target.value });
        break;
      case "Transporte":
        this.setState({ transporte: target.checked });
        break;
      case "Comida":
        this.setState({ comida: target.checked });
        break;
      case "Niños":
        this.setState({ niños: target.checked });
        break;
      case "Guia":
        this.setState({ guia: target.checked });
        break;
      case "Imagen":
        this.setState({ imagen: target.files[0] });
        break;
      case "Telefono":
        this.setState({ tel_contacto: target.value });
        break;
      default:
        break;
    }
  }

  consultarApi = async () => {
    axios
      .post(`https://api-aventurate.herokuapp.com/services/`, {
        act_nombre: this.state.nombre,
        act_descripcion: this.state.descripcion,
        precio: this.state.precio,
        categoria: this.state.tipo,
        usr_id: "5dd86e3a5b15d827a07635eb",
        act_lugar: this.state.niños,
        telefono_contacto: this.state.tel_contacto,
        ciudad: this.state.ciudad,
        departamento: this.state.departamento,
        direccion: this.state.direccion,
        images: [this.state.imagen]
      })
      .then(response => {
        console.log(response.data);
        this.props.history.push("/PerfilProveedor");
      })
      .catch(error => {
        console.log("this is error", error);
      });
  };

  handleSubmit(event) {
    alert(
      "Nombre: " +
        this.state.nombre +
        "\nDescripcion: " +
        this.state.descripcion +
        "\nTipo de actividad: " +
        this.state.tipo +
        "\nDepartamento: " +
        this.state.departamento +
        "\nCiudad: " +
        this.state.ciudad +
        "\nDireccion: " +
        this.state.direccion +
        "\nPrecio: " +
        this.state.precio +
        "\nPersonas: " +
        this.state.personas +
        "\nTransporte: " +
        this.state.transporte +
        "\nComida: " +
        this.state.comida +
        "\nNiños: " +
        this.state.niños +
        "\nGuia: " +
        this.state.guia +
        "\nTelefono: " +
        this.state.tel_contacto +
        "\nImagen: " +
        this.state.imagen
    );

    this.consultarApi();
    event.preventDefault();
  }

  render() {
    return (
      <div className="container-ActivitiesData">
        <form className="activitieForm" onSubmit={this.handleSubmit}>
          <h1>Ingresa tu actividad</h1>
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
              type="number"
              id="Precio"
              placeholder="&nbsp;"
              onChange={this.handleChange}
              min="0"
              max="20000000"
              step="50"
              required
            />
            <span className="label">Precio por persona</span>
            <span className="border"></span>
          </label>
          <label htmlFor="inp" className="inp">
            <input
              type="number"
              id="Personas"
              placeholder="&nbsp;"
              onChange={this.handleChange}
              min="1"
              max="30"
              step="1"
            />
            <span className="label">Cupos</span>
            <span className="border"></span>
          </label>
          <label>
            <select
              className="custom-select"
              id="Tipo"
              onChange={this.handleChange}
              required
            >
              <option value="" selected disabled hidden>
                Escoger Tipo
              </option>
              <option value="Excursiones">Excursiones</option>
              <option value="Comida">Comida</option>
              <option value="Deportes extremos">Deportes extremos</option>
              <option value="Descanso">Descanso</option>
              <option value="Parques naturales">Parques naturales</option>
              <option value="Parques de diversion">Parques de diversión</option>
            </select>
          </label>
          <label htmlFor="inp" className="inp">
            <textarea
              id="Descripcion"
              placeholder="&nbsp;"
              rows="3"
              maxLength="200"
              onChange={this.handleChange}
            />
            <span className="label">Descripción</span>
          </label>
          <label>
            <input type="checkbox" id="Niños" onChange={this.handleChange} />
            &nbsp;Niños
            <br />
            <input
              type="checkbox"
              id="Transporte"
              onChange={this.handleChange}
            />
            &nbsp;Transporte
            <br />
            <input type="checkbox" id="Comida" onChange={this.handleChange} />
            &nbsp;Comida
            <br />
            <input type="checkbox" id="Guia" onChange={this.handleChange} />
            &nbsp;Guía turistico
          </label>
          <label htmlFor="inp" className="inp">
            <input
              type="text"
              id="Departamento"
              placeholder="&nbsp;"
              onChange={this.handleChange}
            />
            <span className="label">Departamento</span>
            <span className="border"></span>
          </label>
          <label htmlFor="inp" className="inp">
            <input
              type="text"
              id="Ciudad"
              placeholder="&nbsp;"
              onChange={this.handleChange}
              required
            />
            <span className="label">Ciudad</span>
            <span className="border"></span>
          </label>
          <label htmlFor="inp" className="inp">
            <input
              type="text"
              id="Direccion"
              placeholder="&nbsp;"
              onChange={this.handleChange}
              autoComplete="off"
              required
            />
            <span className="label">Dirección</span>
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
            />
            <span className="label">Teléfono celular</span>
            <span className="border"></span>
          </label>
          <div className="selectedImage">
            <FileBase64 multiple={false} onDone={this.getFiles.bind(this)} />
            <br />
            <span style={{ color: "red" }} className="label">
              Solo son válidas imágenes que pesen 100kb o menos
            </span>
          </div>
          <div className="input-group">
            <input type="reset" className="btn btn-warning btn-lg btn-block" />
          </div>
          <div className="input-group guardar">
            <input type="submit" className="btn btn-warning btn-lg btn-block" />
          </div>
        </form>
      </div>
    );
  }
}

export default ProviderActivities;
