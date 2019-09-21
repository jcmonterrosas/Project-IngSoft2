import React, { Component } from "react";

class Formtest extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "",
            id: null
        };

        this.updateName = this.updateName.bind(this);
        this.updateId = this.updateId.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateName(event) {
        this.setState({
            name: event.target.value
        });
    }

    updateId(event){
        this.setState({
            id: event.target.value
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name + ' ' + this.state.id);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nombre:
                <input type="text" value={this.state.name} onChange={this.updateName} />
                </label>
                <br/>
                <label>
                    Cedula:
                 <input type="text" value={this.state.id} onChange={this.updateId} />
                </label>
                <br/>
                <input type="submit" value="Submit" />
            </form>

        );
    }
}

export default Formtest;