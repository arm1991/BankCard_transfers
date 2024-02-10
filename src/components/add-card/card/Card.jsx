import { useContext } from "react";
import { images } from "../../../config/config";
import { Context } from "../context/Context";
import CardFace from "./card-face/CardFace";
import CardBack from "./card-back/CardBack";
import "./Card.scss";

const Card = () => {
  const { formValues, toggle, toggleCard } = useContext(Context);
  return (
    <>
      <div className="scene">
        <div className={`card ${toggle ? "front" : "back"}`}>
          <CardFace
            firstName={formValues.name}
            lastName={formValues.surname}
            cardNumber={formValues.card_number}
            validThruMonth={formValues.valid_thru_month}
            validThruYear={formValues.valid_thru_year}
          />
          <CardBack cvv={formValues.cvv} />
        </div>
      </div>
      <button
        className="reverse-button"
        style={{ backgroundImage: `url(${images.reverse_background})` }}
        onClick={() => toggleCard()}
      ></button>
    </>
  );
};

export default Card;
