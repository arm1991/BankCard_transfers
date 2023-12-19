import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import CardFace from "./card-face/CardFace";
import CardBack from "./card-back/CardBack";
import { images } from "../../config/config";
import "./Card.scss";

const Card = ({
  firstName,
  lastName,
  cardNumber,
  validThruMonth,
  validThruYear,
  cvv,
  showFace,
  changeCardSurface,
}) => {
  return (
    <>
      <div className="scene">
        <div className={`card ${showFace ? "front" : "back"}`}>
          <CardFace
            firstName={firstName}
            lastName={lastName}
            cardNumber={cardNumber}
            validThruMonth={validThruMonth}
            validThruYear={validThruYear}
          />
          <CardBack cvv={cvv} />
        </div>
      </div>
      <button
        className="reverse-button"
        style={{ backgroundImage: `url(${images.reverse_background})` }}
        onClick={() => changeCardSurface()}
      ></button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Card;
