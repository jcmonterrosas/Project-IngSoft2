import React, { Component } from "react";
import { withRouter } from 'react-router-dom';

class Btnprincipal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hide: true,
      card: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOutputChange = this.handleOutputChange.bind(this);
    this.onNavigate = this.onNavigate.bind(this);
  }

  handleInputChange(e) {

    this.setState({ hide: false, card: true });

  }

  handleOutputChange(e) {
    this.setState({ hide: true, card: false });
  }

  onNavigate() {
    this.props.history.push(this.props.link);
    console.log(this.props.link);
  }


  render() {
    const style1 = this.state.hide ? { display: "none" } : {};
    const style3 = this.state.card
      ? {
        borderRadius: "20px",
        border: "1px solid rgba(0,0,0,.125)",
        background: "#FFCE33"
      }
      : { background: "rgba(43, 62, 80,0)", border: "none" };

    return (
      <div className="container">
        <div className="row">
          <div className="card col tarjetaBoton1 " style={style3}>
            <button
              type="button"
              className="botonInicial1 btn btn-warning btn-lg btn-block"
              onMouseOver={this.handleInputChange}
              onMouseOut={this.handleOutputChange}
              onClick={this.onNavigate}
            >
              {this.props.buttontext}

            </button>
            <div className="card-body" style={style1}>
              <p className="card-text textoBoton">
                {this.props.cardtext}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Btnprincipal);