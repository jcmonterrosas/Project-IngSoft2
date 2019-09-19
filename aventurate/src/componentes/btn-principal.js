import React, { Component } from 'react'

export default class Btnprincipal extends Component{
    constructor () {
        super();

        this.state={
          hide1:true,
          hide2:true,
          card1:false,
          card2:false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleOutputChange = this.handleOutputChange.bind(this);
      }

      handleInputChange(e,a) {
        const stylea={border:'1px solid rgba(0,0,0,.125'};
        if(a==1){
        this.setState({hide1:false,card1:true});
        }
        else{
        this.setState({hide2:false,card2:true});
        }
      
        
      }

      handleOutputChange(e) {
        
   
        this.setState({hide1:true,hide2:true,card1:false,card2:false});
        
      }

      render() {

        const style1=this.state.hide1 ? {display:'none'} : {};
        const style2=this.state.hide2 ? {display:'none'} : {};
        const style3=this.state.card1 ? {borderRadius:'20px',border:'1px solid rgba(0,0,0,.125)',background:'#FFCE33'} : {background:'#2B3E50'};
        const style4=this.state.card2 ? {borderRadius:'20px',border:'1px solid rgba(0,0,0,.125)',background:'#FFCE33'} : {background:'#2B3E50'};

        return (
      
            <div className="container">
                <div className="row">
                  <div className="card col tarjetaBoton "  style={style3}>
                  <button type="button" className="botonInicial btn btn-warning btn-lg btn-block"
                    onMouseOver={() => this.handleInputChange(this,1)}
                    onMouseOut={this.handleOutputChange}>Hotel</button>       
                    <div className="card-body" style={style1} >
                    <p className="card-text textoBoton" >¿Ya sabes a donde quieres ir?</p>
                  </div>
                </div>
                <div className="col-4">
                </div>
                <div className="card col tarjetaBoton "  style={style4} >
                  <button type="button" className="botonInicial btn btn-warning btn-lg btn-block" 
                  onMouseOver={() => this.handleInputChange(this,2)}
                  onMouseOut={this.handleOutputChange}>Actividad</button>       
                    <div className="card-body"  style={style2} >
                    <p className="card-text textoBoton" >¿Quieres hacer algo, pero no sabes donde?</p>
                  </div>
                </div>
            </div>
          </div>

        )

    }
    
}