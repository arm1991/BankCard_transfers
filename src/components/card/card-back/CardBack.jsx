import React from "react";
import "./CardBack.scss";

const CardBack = ({ cvv }) => {
  return (
    <div className="card-back card-surface">
      <div className="back"></div>
      <p>{cvv ? cvv : "123"}</p>
    </div>
  );
};

export default CardBack;
