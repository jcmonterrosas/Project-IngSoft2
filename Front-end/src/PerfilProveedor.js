import React, {Component} from "react";
import "./PerfilProveedor.css";

import TPerfil from "./componentes/tarjeta-perfil";


export default class PerfilProveedor extends Component {

  render() {
    return (
      <div className=" jumbotron">
        <div>
        <TPerfil/>
        </div>

      </div>
    );
  }
}

