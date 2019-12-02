import React, { Component } from "react";
import "./ProviderActivities.css";
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
        telefono_contacto: this.state.guia,
        ciudad: this.state.ciudad,
        departamento: this.state.departamento,
        direccion: this.state.direccion,
        images: [this.state.imagen]
      })
      .then(response => {
        console.log(response.data);
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
        "\nImagen: " +
        this.state.imagen
    );

    this.consultarApi();

    event.preventDefault();
  }

  render() {
    return (
      <div className="container-ActivitiesData">
        <form className="activitieForm">
          <h1>Ingresa tu actividad</h1>
          <label for="inp" className="inp">
            <input
              type="text"
              id="Nombre"
              placeholder="&nbsp;"
              value={this.state.nombre}
              onChange={this.handleChange}
              autoComplete="off"
            />
            <span className="label">Nombre</span>
            <span className="border"></span>
          </label>
          <label for="inp" className="inp">
            <input
              type="number"
              id="Precio"
              placeholder="&nbsp;"
              value={this.state.precio}
              onChange={this.handleChange}
              min="0"
              max="20000000"
              step="50"
            />
            <span className="label">Precio</span>
            <span className="border"></span>
          </label>
          <label for="inp" className="inp">
            <input
              type="number"
              id="Personas"
              placeholder="&nbsp;"
              value={this.state.personas}
              onChange={this.handleChange}
              min="1"
              max="30"
              step="1"
            />
            <span className="label">Cantidad de personas</span>
            <span className="border"></span>
          </label>
          <label>
            <select
              className="custom-select"
              id="Tipo"
              value={this.state.tipo}
              onChange={this.handleChange}
            >
              <option value="excursiones">Excursiones</option>
              <option value="comida">Comida</option>
              <option value="deportes extremos">Deportes extremos</option>
              <option value="descanso">Descanso</option>
              <option value="parques naturales">Parques naturales</option>
              <option value="parques de diversion">Parques de diversión</option>
            </select>
          </label>
          <label for="inp" className="inp">
            <textarea
              id="Descripcion"
              placeholder="&nbsp;"
              rows="3"
              maxLength="200"
              value={this.state.descripcion}
              onChange={this.handleChange}
            />
            <span className="label">Descripción</span>
          </label>
          <label>
            <input
              type="radio"
              id="Niños"
              value={this.state.niños}
              onChange={this.handleChange}
            />
            &nbsp;Niños
            <br />
            <input
              type="radio"
              id="Transporte"
              value={this.state.transporte}
              onChange={this.handleChange}
            />
            &nbsp;Transporte
            <br />
            <input
              type="radio"
              id="Comida"
              value={this.state.comida}
              onChange={this.handleChange}
            />
            &nbsp;Comida
            <br />
            <input
              type="radio"
              id="Guia"
              value={this.state.guia}
              onChange={this.handleChange}
            />
            &nbsp;Guía turistico
          </label>
          <label for="inp" className="inp">
            <input
              type="text"
              id="Departamento"
              placeholder="&nbsp;"
              value={this.state.departamento}
              onChange={this.handleChange}
            />
            <span className="label">Departamento</span>
            <span className="border"></span>
          </label>
          <label for="inp" className="inp">
            <input
              type="text"
              id="Ciudad"
              placeholder="&nbsp;"
              value={this.state.ciudad}
              onChange={this.handleChange}
            />
            <span className="label">Ciudad</span>
            <span className="border"></span>
          </label>
          <label for="inp" className="inp">
            <input
              type="text"
              id="Direccion"
              placeholder="&nbsp;"
              value={this.state.direccion}
              onChange={this.handleChange}
              autoComplete="off"
            />
            <span className="label">Dirección</span>
            <span className="border"></span>
          </label>
          <FileBase64 multiple={false} onDone={this.getFiles.bind(this)} />
          <div className="input-group">
            <button type="reset" className="btn btn-warning btn-lg btn-block">
              Restablecer
            </button>
          </div>
          <div className="input-group guardar">
            <button
              type="button"
              className="btn btn-warning btn-lg btn-block"
              onClick={this.handleSubmit}
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default ProviderActivities;
