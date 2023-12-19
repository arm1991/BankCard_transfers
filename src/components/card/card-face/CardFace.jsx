import React from "react";
import "./CardFace.scss";
import { images } from "../../../config/config";

const CardFace = ({
  firstName,
  lastName,
  cardNumber,
  validThruMonth,
  validThruYear,
}) => {
  return (
    <div
      className="card-face card-surface"
      style={{ backgroundImage: `url(${images.card_background})` }}
    >
      <h1 className="card-number">
        {cardNumber ? cardNumber : "XXXX XXXX XXXX XXXX"}
      </h1>
      <p className="valid-thru">
        {validThruMonth ? validThruMonth : "12"}
        {" / "}
        {validThruYear ? validThruYear : "34"}
      </p>
      <p>
        {firstName ? firstName : "Joe"} {lastName ? lastName : "Jackson"}
      </p>
    </div>
  );
};

export default CardFace;
