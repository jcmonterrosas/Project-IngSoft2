import React, {Component} from 'react';
import logo from './img/logo.png';
import './App.css';
//import videoBackground from './video/background.mp4';

import Btnprincipal from './componentes/btn-principal';

class App extends Component {
    render() {
        return (

            <div className="container">
                <div className="App">
                    {/*<header className="App-header">
                        <div className="header-video">
                            <video id="background-video" loop muted autoPlay>
                                <source src={videoBackground} type="video/mp4;"/>
                                Tú navegador no soporta la etiqueta video
                            </video>
                        </div>
                        <div class="header-overlay"></div>
                    </header>*/}
                    <img src={logo} className="logo"/>
                    <div className="row d-flex align-items-end">
                        <Btnprincipal/>
                    </div>

                </div>
            </div>

        );
    }

}

export default App;
