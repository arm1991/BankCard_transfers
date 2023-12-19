import { memo } from "react";

const FormFirstName = ({ firstNameInput, changeFirstname }) => {
  return (
    <>
      <p>First Name</p>
      <input
        className="form-input"
        type="text"
        placeholder="Joe"
        value={firstNameInput}
        onChange={(e) => {
          changeFirstname(e.target.value);
        }}
      />
    </>
  );
};

export default memo(FormFirstName);
