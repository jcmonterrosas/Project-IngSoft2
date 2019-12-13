import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './SAct_Card.css';

const Dropmenu = ({ classCard }) => (
    <div className={classCard}>
        <form action="#" method="POST">
            <label>Adultos:  &nbsp;&nbsp;</label>
            <input type="number" name="adultos" min="1" max="4" required/>
            <br/>
            <label>Niños:  &nbsp;&nbsp;</label>
            <input type="number" name="niños" min="1" max="4" required/>
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
        let cardName = "";
        if (this.props.property.activity === "Con niños" || this.props.property.activity === "En grupo") {
            name = this.state.isToggleOn ? 'card_act' : 'card_menu'
            cardName = this.state.isToggleOn ? 'hide_menu' : 'drop_menu'
        } else {
            cardName = 'hide_menu'
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
                <Dropmenu classCard = {cardName}/>
            </div>
        );
    }
}

Act_Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Act_Card;