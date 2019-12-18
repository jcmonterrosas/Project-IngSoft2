import React from "react";
import "./Reservation.css";

const CardReserve = props => {

    const {
        name,
        ciudad,
        price_per_person
    } = props.info;

    return (
        <div className={name ? "cardReserve" : ""}>
            {name}
            <br />
            {ciudad}
            <br />
            {price_per_person ? "$ " + price_per_person : null}
        </div>
  );
};

export default CardReserve;