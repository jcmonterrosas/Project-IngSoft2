import React from 'react';
import PropTypes from 'prop-types';
import './SAct_Card.css';

const Act_Card = ({ property }) => {
    const { index, picture, activity } = property;
    return (
        <div id={`card-${index}`} className="card">
                        <div className="card__img--hover" style={{
                            backgroundImage: `url(${picture})`
                        }}/>
                    <div className="card__info">
                        <h3 className="card__title">{activity}</h3>
                    </div>
        </div>
    )
}

Act_Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Act_Card;