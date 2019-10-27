import React, { Component } from "react";
import logo from "./img/Logo_P50.png";
import "./Home.css";
import videoBackground from "./video/background.mp4";
import Btnprincipal from "./componentes/btn-principal";

class Home extends Component {

  constructor() {
    super();

    this.state = {
      buttontext: '',
      cardtext: '',
      link: ''
    };

  }

  buttonInformation = (buttontext, cardtext) => {
    this.setState({ buttontext, cardtext });
    console.log(buttontext);
  }

  render() {
    return (
      <div className="bodyHome">
        <div className="Home">
          <header className="Home-header headerApp">
            <div className="header-video">
              <video id="background-video" loop muted autoPlay>
                <source src={videoBackground} type="video/mp4;" />
                navegador no soporta la etiqueta video
              </video>
            </div>
            <div className="header-overlay" />
            <div className="container containerInicial">
              <div className="row filaLogo">
                <div className="col" />
                <img src={logo} className="logoHome col" alt="logo" />
                <div className="col" />
              </div>
              <div className="row ">
                <div className="col">
                  <Btnprincipal
                    buttontext='Hotel'
                    cardtext='¿Ya sabes a donde quieres ir?'
                    link="/SearchHotel"
                  />
                </div>
                <div className="col" />
                <div className="col">
                  <Btnprincipal
                    buttontext='Actividad'
                    cardtext='¿Quieres hacer algo, pero no sabes donde?'
                    link="/SearchActivities"
                  />
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default Home;