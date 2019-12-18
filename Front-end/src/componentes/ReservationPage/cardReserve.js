import React from "react";
import "./Reservation.css";

const CardReserve = props => {
  const { name, city, address, price, hotel_o_servicio } = props.info;

  return (
    <div className={name ? "cardReserve" : ""}>
      {name}
      <br />
      {city}
      <br />
      {address}
      <br />
      {price ? "$ " + price : null}
    </div>
  );
};

export default CardReserve;
