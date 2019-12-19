import React from "react";
import "./Reservation.css";

const CardReserve = props => {
  const { name, city, address, price } = props.info;

  return (
    <div className={name ? "cardReserve" : ""}>
      <div>
        <h5 style={{ margin: "0" }}>{name}</h5>
        {city}
        <br />
        {address}
      </div>
      {price ? "$ " + price : null}
    </div>
  );
};

export default CardReserve;
