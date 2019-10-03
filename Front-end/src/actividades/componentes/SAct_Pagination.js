import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './SAct_Pagination.css';

class SAct_Pagination extends Component {

    render() {
        return (
            <div className="act-paginacion">
                <div className="container">
                    <input type="radio" className="radio" name="progress" value="twentyfive" id="twentyfive" defaultChecked />
                    <label  htmlFor="twentyfive" className="label">Actividades</label>

                    <input type="radio" className="radio" name="progress" value="fifty" id="fifty" />
                    <label htmlFor="fifty" className="label">Personas</label>

                    <input type="radio" className="radio" name="progress" value="seventyfive" id="seventyfive" />
                    <label htmlFor="seventyfive" className="label">Fechas</label>

                    <input type="radio" className="radio" name="progress" value="onehundred" id="onehundred" />
                    <label htmlFor="onehundred" className="label">Buscar</label>

                    <div className="progress">
                        <div className="progress-bar"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SAct_Pagination;