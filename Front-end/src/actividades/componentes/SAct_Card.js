import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import './SAct_Card.css';

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
      }
    

    render(){
        return (
            <div onClick={this.handleClick} id={`card-${this.props.property.index}`} className={this.state.isToggleOn ? 'card_act' : 'card_toggle'} >
                            <div className="card__img--hover" style={{
                                backgroundImage: `url(${this.props.property.picture})`
                            }}/>
                        <div>
                            <h3 className="card__title">{this.props.property.activity}</h3>
                        </div>
            </div>
        );
    }
}

Act_Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Act_Card;