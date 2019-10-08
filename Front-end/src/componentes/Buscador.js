import React, {Component} from "react";
import {LinkedCalendar} from 'rb-datepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import "./Buscador.css";


export default class Buscador extends Component {

    busquedaRef = React.createRef();

    
    constructor(props) {
        super(props);

        this.state = {
            hide: true,
            date: "Fecha de llegada-Fecha de salida"
        };

        this.showCalendar = this
            .showCalendar
            .bind(this);
        this.hideCalendar=this.hideCalendar.bind(this);

    }

    onDatesChange = ({ startDate, endDate}) => {
      const date1=startDate.toString().split(" ");
      const date2=endDate.toString().split(" ");
      const datefull=date1[1]+"/"+date1[2]+"/"+date1[3]+"-"
      +date2[1]+"/"+date2[2]+"/"+date2[3]
      this.setState({hide:true,date:datefull})
            
  }

    showCalendar(e) {
        this.setState({hide: false});
    }

    hideCalendar(e){
      this.setState({hide:true});
    }
  

    ObtenerDatos = e => {
        e.preventDefault();
        const termino = this.busquedaRef.current.value;
        this.props.datosBusqueda(termino);
    };

    render() {
        const style1 = this.state.hide
            ? {
                display: "none"
            }
            : {};
        return (
          
            <form className="Buscador container" onSubmit={this.ObtenerDatos}>
                <div className="form-group row justify-content-between filaBuscador">
                    <div className="col-6">
                        <input
                            ref={this.busquedaRef}
                            type="text"
                            className="form-control "
                            placeholder="Ej: Santa Marta" 
                            onClick={this.hideCalendar} readonly></input>
                    </div>
                    <div className="col-4" >
                        <input type="text"  onClick={this.showCalendar} className="form-control" placeholder={this.state.date} readonly></input>
                        <div style={style1} >
                             <LinkedCalendar  onDatesChange={this.onDatesChange} showDropdowns={false} opens={'right'}/>
                        </div>
                    </div>
                    <div className="col-2" >
                        <input type="number" onClick={this.hideCalendar} className="form-control" placeholder="# personas" readonly></input>
                    </div>
                    
                </div>
                <div className="form-group row justify-content-end">
                        <input
                            type="submit"
                            className="col-2 align-self-end btn btn-warning "
                            value="Buscar"></input>
                    </div>
            </form>
        );
    }
}
