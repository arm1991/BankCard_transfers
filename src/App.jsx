import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./components/card/Card";
import Form from "./components/form/Form";
import SecondForm from "./components/second-form/SecondForm";
import { data, images } from "./config/config";
import { removeSpaces, checkLocalData } from "./helpers/helpers";

function App() {
  const senderExists = useSelector((state) => state.senderExists);
  const dispatch = useDispatch();
  const [firstNameInput, setFirstNameInput] = useState("");
  const [lastNameInput, setLastNameInput] = useState("");
  const [cardNumberInput, setCardNumberInput] = useState("");
  const [validThruMonthInput, setValidThruMonthInput] = useState("");
  const [validThruYearInput, setValidThruYearInput] = useState("");
  const [cvvInput, setCvvInput] = useState("");
  const [showFace, setShowFace] = useState(true);

  function getData() {
    const dataFromLocal = JSON.parse(localStorage.getItem("usersData"));
    if (checkLocalData(dataFromLocal)) {
      localStorage.setItem("usersData", JSON.stringify(data));
    } else {
      dispatch({ type: "set_users", data: dataFromLocal });
    }
  }

  const changeFirstName = (value) => {
    if (!showFace) changeCardSurface();
    setFirstNameInput(removeSpaces(value));
  };
  const changeLastName = (value) => {
    if (!showFace) changeCardSurface();
    setLastNameInput(removeSpaces(value));
  };
  const changeCardNumber = (value) => {
    if (!showFace) changeCardSurface();
    let input = removeSpaces(value);

    // adding spaces
    input = input.replace(/(\d{4})/g, "$1 ").trim();
    setCardNumberInput(input);
  };
  const changeValidThruMonth = (value) => {
    if (!showFace) changeCardSurface();
    setValidThruMonthInput(removeSpaces(value));
  };
  const changeValidThruYear = (value) => {
    if (!showFace) changeCardSurface();
    setValidThruYearInput(removeSpaces(value));
  };
  const changeCvv = (value) => {
    if (showFace) changeCardSurface();

    setCvvInput(removeSpaces(value));
  };
  const changeCardSurface = () => {
    setShowFace((prev) => !prev);
  };

  useEffect(() => {
    getData();
  });
  // you can dispatch dispatch("add") and call setData if you want to add user
  return (
    <div
      className="page"
      style={{ backgroundImage: `url(${images.root_background})` }}
    >
      <Card
        firstName={firstNameInput}
        lastName={lastNameInput}
        cardNumber={cardNumberInput}
        validThruMonth={validThruMonthInput}
        validThruYear={validThruYearInput}
        cvv={cvvInput}
        showFace={showFace}
        changeCardSurface={changeCardSurface}
      />
      {senderExists ? (
        <SecondForm />
      ) : (
        <Form
          firstNameInput={firstNameInput}
          changeFirstName={changeFirstName}
          lastNameInput={lastNameInput}
          changeLastName={changeLastName}
          cardNumberInput={cardNumberInput}
          changeCardNumber={changeCardNumber}
          validThruMonthInput={validThruMonthInput}
          changeValidThruMonth={changeValidThruMonth}
          validThruYearInput={validThruYearInput}
          changeValidThruYear={changeValidThruYear}
          cvvInput={cvvInput}
          changeCvv={changeCvv}
        />
      )}
    </div>
  );
}

export default App;
