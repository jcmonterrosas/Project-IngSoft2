import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './SAct_Card.css';

const Dropmenu1 = ({ classCard }) => (
    <div className={classCard}>
        <form action="#" method="POST">
            <label>Cantidad de días: &nbsp;&nbsp;</label>
            <input type="number" name="dias" min="1" max="100" required/>
            <br/>
            <label>Mes: &nbsp;&nbsp;</label>
            <input type="month" name="mes" required/>
        </form>
    </div>
   );

const Dropmenu2 = ({ classCard }) => (
    <div className={classCard}>
        <form action="#" method="POST">
            <label>Fecha inicial:  &nbsp;&nbsp;</label>
            <input type="date" name="fecha" required/>
            <br/>
            <label>Fecha final:  &nbsp;&nbsp;</label>
            <input type="date" name="fecha" required/>
        </form>
    </div>
);

class Act_Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isToggleOn: true
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
        this.props.onCard(this.props.property.activity, this.state.isToggleOn)
    }

    render() {
        let name = "";
        let cardName1 = "";
        let cardName2 = "";
        if (this.props.property.activity === "Sé la cantidad de días") {
            name = this.state.isToggleOn ? 'card_act' : 'card_menu'
            cardName1 = this.state.isToggleOn ? 'hide_menu' : 'drop_menu'
            cardName2 = 'hide_menu'
        }else if(this.props.property.activity === "Tengo una fecha especifica"){
            name = this.state.isToggleOn ? 'card_act' : 'card_menu'
            cardName2 = this.state.isToggleOn ? 'hide_menu' : 'drop_menu'
            cardName1 = 'hide_menu'
        }else {
            cardName1 = 'hide_menu'
            cardName2 = 'hide_menu'
            name = this.state.isToggleOn ? 'card_act' : 'card_toggle'
        }

        return (
            <div id={`card-${this.props.property.index}`} className={name} >
                <div onClick={this.handleClick}  className="card__img--hover" style={{
                    backgroundImage: `url(${this.props.property.picture})`
                }} />
                <div>
                    <h3 onClick={this.handleClick}  className="card__title">{this.props.property.activity}</h3>
                </div>
                <Dropmenu1 classCard = {cardName1}/>
                <Dropmenu2 classCard = {cardName2}/>
            </div>
        );
    }
}

Act_Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Act_Card;