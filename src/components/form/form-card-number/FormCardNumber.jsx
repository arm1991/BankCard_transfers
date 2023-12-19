import { memo } from "react";

const FormCardNumber = ({ cardNumberInput, changeCardNumber, checkValid }) => {
  return (
    <>
      <p>Card Number</p>
      <input
        className="form-input"
        type="text"
        placeholder="XXXX XXXX XXXX XXXX"
        maxLength={19}
        value={cardNumberInput}
        onChange={(e) => {
          if (checkValid(e.target.value, "card_number"))
            changeCardNumber(e.target.value);
        }}
      />
    </>
  );
};

export default memo(FormCardNumber);
