import React, { Component } from "react";

export default class Btnprincipal extends Component {
  constructor() {
    super();

    this.state = {
      hide: true,
      card: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOutputChange = this.handleOutputChange.bind(this);
  }

  handleInputChange(e, a) {
    
      this.setState({ hide: false,card:true});
   
  }

  handleOutputChange(e) {
    this.setState({ hide: true,  card: false });
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
