import React, { Component } from 'react';
import './SAct_Date.css';
import Card from './componentes/SAct_Card-Date';
import Pagination from './componentes/SAct_Pagination3'

// class component
class SAct_Date extends Component {

    constructor(props) {
        super(props);
        this.state = {
            properties: [
                {
                    "_id": "123",
                    "index": 0,
                    "picture": "https://www.aviatur.com/source/contenidos/viajes-carretera-caribe-colombia.jpg",
                    "activity": "Sé la cantidad de días"
                },
                {
                    "_id": "1234",
                    "index": 1,
                    "picture": "http://blog.redbus.co/wp-content/uploads/2019/05/Viajar-a-Colombia-por-motivos-turi%CC%81sticos.jpg",
                    "activity": "Tengo una fecha especifica"
                },
                {
                    "_id": "12345",
                    "index": 2,
                    "picture": "https://i.pinimg.com/originals/7a/95/b6/7a95b6ec58ee56465c8d83cd0eb28c8e.jpg",
                    "activity": "No tengo una fecha"
                }
                ],
            property: "",
            name: "",
            isToggleOn: true,
            type: "",
            persons: "",
            date: "",
            done: ""
        }

        // this.property = this.state.properties[0];
        this.handleClick = this.handleClick.bind(this);
    }

    nextProperty = () => {
        const newIndex = this.state.property.index + 1;
        this.setState({
            property: this.state.properties[newIndex]
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
            <div className="DateActivities">
                <div>
                    <h1>Pon una fecha a tu viaje</h1>
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
                    persons="/SearchActivities/People"
                    date="/SearchActivities/Date"
                    done="/SearchActivity"
                />
            </div>
        );
    }
}

export default SAct_Date;