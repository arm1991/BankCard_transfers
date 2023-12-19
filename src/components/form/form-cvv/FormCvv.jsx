import { memo } from "react";

const FormCvv = ({ cvvInput, changeCvv, checkValid }) => {
  return (
    <>
      <p>CVV</p>
      <input
        className="form-input"
        type="text"
        placeholder="000"
        maxLength={3}
        value={cvvInput}
        onChange={(e) => {
          if (checkValid(e.target.value)) changeCvv(e.target.value);
        }}
      />
    </>
  );
};

export default memo(FormCvv);
