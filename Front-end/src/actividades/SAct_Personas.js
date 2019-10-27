import React, { Component } from 'react';
import './SAct_Personas.css';
import Card from './componentes/SAct_Card-Per';
import Pagination from './componentes/SAct_Pagination'
import data from './data/dataPersonas'

// class component
class SAct_Personas extends Component {

    constructor(props) {
        super(props);
        this.state = {
            properties: data.properties,
            property: data.properties[0],
            name: "",
            isToggleOn: true,
            type: "",
            persons: "",
            date: "",
            done: ""
        }

        this.handleClick = this.handleClick.bind(this);
    }

    nextProperty = () => {
        const newIndex = this.state.property.index + 1;
        this.setState({
            property: data.properties[newIndex]
        })
    }

    handleClick(e, a) {
        this.setState({
            name: e,
            isToggleOn: a
        });
        console.log(e, a)
    }

    render() {
        const { properties } = this.state;
        return (
            <div className="Personas">
                <div>
                    <h1>Cuentanos con quien viajas</h1>
                </div>
                <div className="all_cards">
                    {
                        properties.map(property => <div key={property._id} className="content_card">
                            <Card property={property} onCard={this.handleClick} />
                        </div>)
                    }
                </div>
                <Pagination
                    type="/SearchActivities"
                    persons="/SearchActivities/Personas"
                    date="/SearchActivities/Dias"
                    done="/SearchActivity"
                />
            </div>
        );
    }
}

export default SAct_Personas;