import React, { memo } from "react";

const FormLastName = ({ lastNameInput, changeLastname }) => {
  return (
    <>
      <p>Last Name</p>
      <input
        className="form-input"
        type="text"
        placeholder="Jackson"
        value={lastNameInput}
        onChange={(e) => {
          changeLastname(e.target.value);
        }}
      />
    </>
  );
};

export default memo(FormLastName);
