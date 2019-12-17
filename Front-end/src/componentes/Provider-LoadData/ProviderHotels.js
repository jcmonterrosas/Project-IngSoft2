import React, { Component } from "react";
import "./ProviderLoadData.css";
import axios from "axios";

import FileBase64 from "react-file-base64";
import { getFromStorage } from "../../storage";

var idUser = getFromStorage("id");

function Cantidad(id, e) {
  return (
    <label htmlFor="inp" className="inp">
      <input
        type="number"
        id={id}
        placeholder="&nbsp;"
        onChange={e}
        min="1"
        max="20"
        step="1"
      />
      <span className="label">{id}</span>
      <span className="border"></span>
    </label>
  );
}

class ProviderHotels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: String,
      departamento: String,
      ciudad: String,
      direccion: String,
      precio: Number,
      tel_contacto: String,
      imagen: [],
      individual: false,
      doble: false,
      familiar: false,
      multiple: false,
      habitaciones_individuales: 0,
      habitaciones_dobles: 0,
      habitaciones_familiares: 0,
      habitaciones_multiples: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
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
      case "Imagen":
        this.setState({ imagen: target.files[0] });
        break;
      case "Telefono":
        this.setState({ tel_contacto: target.value });
        break;
      case "Individual":
        this.setState({ individual: target.checked });
        break;
      case "Doble":
        this.setState({ doble: target.checked });
        break;
      case "Familiar":
        this.setState({ familiar: target.checked });
        break;
      case "Multiple":
        this.setState({ multiple: target.checked });
        break;
      case "Habitaciones individuales":
        this.setState({ habitaciones_individuales: target.value });
        break;
      case "Habitaciones dobles":
        this.setState({ habitaciones_dobles: target.value });
        break;
      case "Habitaciones familiares":
        this.setState({ habitaciones_familiares: target.value });
        break;
      case "Habitaciones multiples":
        this.setState({ habitaciones_multiples: target.value });
        break;
      default:
        break;
    }
  }

  consultarApi = async () => {
    var ind = "";
    var dob = "";
    var fam = "";
    var mul = "";
    if (this.state.individual) {
      ind = "Individual";
    }
    if (this.state.doble) {
      dob = "Doble";
    }
    if (this.state.familiar) {
      fam = "Familiar";
    }
    if (this.state.multiple) {
      mul = "Multiple";
    }

    console.log(ind + " " + dob + " " + fam + " " + mul);
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:3000"
      }
    };
    axios
      .post(
        `https://api-aventurate.herokuapp.com/hotels/`,
        {
          name: this.state.nombre,
          usr_id: idUser,
          departamento: this.state.departamento,
          ciudad: this.state.ciudad,
          address: this.state.direccion,
          phone: this.state.tel_contacto,
          price_per_person: this.state.precio,
          acommodation: ind + " " + dob + " " + fam + " " + mul,
          hab_ind: this.state.habitaciones_individuales,
          hab_dob: this.state.habitaciones_dobles,
          hab_fam: this.state.habitaciones_familiares,
          hab_mul: this.state.habitaciones_multiples,
          images: this.state.imagen
        },
        config
      )
      .then(response => {
        console.log("Done: ", response.data);
        this.props.history.push("/PerfilProveedor");
      })
      .catch(error => {
        console.log("this is error", error);
      });
  };

  // Esto hace un bug que no entiendo donde hay que hacer check dos veces para que sirva
  handleReset(event) {
    this.setState({
      individual: false,
      doble: false,
      familiar: false,
      multiple: false,
      reset: true
    });
  }

  handleSubmit(event) {
    alert(
      "Nombre: " +
        this.state.nombre +
        "\nDepartamento: " +
        this.state.departamento +
        "\nCiudad: " +
        this.state.ciudad +
        "\nDireccion: " +
        this.state.direccion +
        "\nPrecio: " +
        this.state.precio +
        "\nTelefono: " +
        this.state.tel_contacto +
        "\nImagen: " +
        this.state.imagen +
        "\nIndividual: " +
        this.state.individual +
        "\nDoble: " +
        this.state.doble +
        "\nFamiliar: " +
        this.state.familiar +
        "\nMultiple: " +
        this.state.multiple +
        "\nHabitaciones Individuales: " +
        this.state.habitaciones_individuales +
        "\nHabitaciones Dobles: " +
        this.state.habitaciones_dobles +
        "\nHabitaciones Familiares: " +
        this.state.habitaciones_familiares +
        "\nHabitaciones Multiples: " +
        this.state.habitaciones_multiples
    );

    this.consultarApi();

    event.preventDefault();
  }

  render() {
    let CantidadIndividuales,
      CantidadDobles,
      CantidadFamiliares,
      CantidadMultiples;
    if (this.state.individual) {
      CantidadIndividuales = Cantidad(
        "Habitaciones individuales",
        this.handleChange
      );
    } else {
      CantidadIndividuales = null;
    }
    if (this.state.doble) {
      CantidadDobles = Cantidad("Habitaciones dobles", this.handleChange);
    } else {
      CantidadDobles = null;
    }
    if (this.state.familiar) {
      CantidadFamiliares = Cantidad(
        "Habitaciones familiares",
        this.handleChange
      );
    } else {
      CantidadFamiliares = null;
    }
    if (this.state.multiple) {
      CantidadMultiples = Cantidad("Habitaciones multiples", this.handleChange);
    } else {
      CantidadMultiples = null;
    }
    return (
      <div className="container-ActivitiesData">
        <form
          className="activitieForm"
          onSubmit={this.handleSubmit}
          onReset={this.handleReset}
        >
          <h1>Ingresa tu hotel</h1>
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
          <label>
            <h6>Habitaciones</h6>
            <input
              type="checkbox"
              id="Individual"
              onChange={this.handleChange}
            />
            &nbsp;Individual
            <br />
            <input type="checkbox" id="Doble" onChange={this.handleChange} />
            &nbsp;Doble
            <br />
            <input type="checkbox" id="Familiar" onChange={this.handleChange} />
            &nbsp;Familiar
            <br />
            <input type="checkbox" id="Multiple" onChange={this.handleChange} />
            &nbsp;Múltiple
          </label>
          {CantidadIndividuales}
          {CantidadDobles}
          {CantidadFamiliares}
          {CantidadMultiples}
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

export default ProviderHotels;
