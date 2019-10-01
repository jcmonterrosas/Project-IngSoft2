import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './SAct_Pagination.css';
import { withRouter } from 'react-router-dom';

class SAct_Pagination extends Component {

    constructor(props) {
        super(props);

        this.onNavigateType = this.onNavigateType.bind(this);
        this.onNavigatePersons = this.onNavigatePersons.bind(this);
        this.onNavigateDate = this.onNavigateDate.bind(this);
        this.onNavigateDone = this.onNavigateDone.bind(this);
    }

    onNavigateType() {
        this.props.history.push(this.props.type);
        console.log(this.props.tipo);
    }

    onNavigatePersons() {
        this.props.history.push(this.props.persons);
        console.log(this.props.personas);
    }

    onNavigateDate() {
        this.props.history.push(this.props.date);
        console.log(this.props.dias);
    }

    onNavigateDone() {
        this.props.history.push(this.props.done);
        console.log(this.props.done);
    }

    render() {
        return (
            <div className="act-paginacion">
                <div className="container">
                    <input type="radio" onClick={this.onNavigateType} className="radio" name="progress" value="twentyfive" id="twentyfive" defaultChecked />
                    <label htmlFor="twentyfive" className="label">Actividades</label>

                    <input type="radio" onClick={this.onNavigatePersons}  className="radio" name="progress" value="fifty" id="fifty" />
                    <label htmlFor="fifty" className="label">Personas</label>

                    <input type="radio" onClick={this.onNavigateDate}  className="radio" name="progress" value="seventyfive" id="seventyfive" />
                    <label htmlFor="seventyfive" className="label">Fechas</label>

                    <input type="radio" onClick={this.onNavigateDone}  className="radio" name="progress" value="onehundred" id="onehundred" />
                    <label htmlFor="onehundred" className="label" onClick={this.onNavigate}>Buscar</label>

                    <div className="progress">
                        <div className="progress-bar"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SAct_Pagination);