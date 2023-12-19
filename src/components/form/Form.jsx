import { useDispatch } from "react-redux";
import { checkValid, removeSpaces } from "../../helpers/helpers";
import FormFirstName from "./form-first-name/FormFirstName";
import FormLastName from "./form-last-name/FormLastName";
import FormCardNumber from "./form-card-number/FormCardNumber";
import FormValidThru from "./form-valid-thru/FormValidThru";
import FormCvv from "./form-cvv/FormCvv";
import "./Form.scss";

const Form = ({
  firstNameInput,
  changeFirstName,
  lastNameInput,
  changeLastName,
  cardNumberInput,
  changeCardNumber,
  validThruMonthInput,
  changeValidThruMonth,
  validThruYearInput,
  changeValidThruYear,
  cvvInput,
  changeCvv,
}) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch({
      type: "checkSender",
      payload: {
        firstNameInput,
        lastNameInput,
        cardNumberInput: removeSpaces(cardNumberInput),
        validThru: {
          month: +validThruMonthInput,
          year: +validThruYearInput,
        },
        cvv: +cvvInput,
      },
    });
  };

  return (
    <div className="form">
      <legend>Forma</legend>
      <div className="form-conatiner">
        <FormFirstName
          firstNameInput={firstNameInput}
          changeFirstname={changeFirstName}
        />
        <FormLastName
          lastNameInput={lastNameInput}
          changeLastname={changeLastName}
        />
        <FormCardNumber
          cardNumberInput={cardNumberInput}
          changeCardNumber={changeCardNumber}
          checkValid={checkValid}
        />
        <FormValidThru
          validThruMonthInput={validThruMonthInput}
          changeValidThruMonth={changeValidThruMonth}
          validThruYearInput={validThruYearInput}
          changeValidThruYear={changeValidThruYear}
          checkValid={checkValid}
        />
        <FormCvv
          cvvInput={cvvInput}
          changeCvv={changeCvv}
          checkValid={checkValid}
        />
      </div>
      <button className="form-button" onClick={handleClick}>
        Confirm
      </button>
    </div>
  );
};

export default Form;
