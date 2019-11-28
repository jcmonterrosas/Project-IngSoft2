import React, { Component } from 'react';
import './SearchActivities.css';
import Card from './componentes/SAct_Card';
import Pagination from './componentes/SAct_Pagination';
import data from './data/data';

class SearchActivities extends Component {

    constructor(props) {
        super(props);
        this.state = {
            properties: data.properties,
            property: data.properties[0],
            type: "",
            persons: "",
            date: "",
            done: ""
        }
    }

    nextProperty = () => {
        const newIndex = this.state.property.index + 1;
        this.setState({
            property: data.properties[newIndex]
        })
    }

    render() {
        const { properties } = this.state;
        return (
            <div className ="page">
                <div>
                    <h1>Dinos lo que te gustaría hacer</h1>
                </div>
                <div className ="all_cards">
                {
                    properties.map(property => <div key={property._id}><Card property={property} /></div>)
                }
                </div>

                <Pagination 
                    type =  "/SearchActivities"
                    persons = "/SearchActivities/People"
                    date = "/SearchActivities/Date"
                    done = "/SearchActivity"
                />
            </div>
        );
    }
}

export default SearchActivities;