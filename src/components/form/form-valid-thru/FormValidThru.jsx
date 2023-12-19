import React, { memo } from "react";

const FormValidThru = ({
  validThruMonthInput,
  changeValidThruMonth,
  validThruYearInput,
  changeValidThruYear,
  checkValid,
}) => {
  return (
    <div className="form-valid-thru">
      <div className="form-valid-thru-text">
        <p>Valid Thru</p>
      </div>
      <div className="form-valid-thru-inputs">
        <input
          className="form-input"
          type="text"
          placeholder="12"
          maxLength={2}
          value={validThruMonthInput}
          onChange={(e) => {
            if (checkValid(e.target.value, "month"))
              changeValidThruMonth(e.target.value);
          }}
        />
        <input
          className="form-input"
          type="text"
          placeholder="34"
          maxLength={2}
          value={validThruYearInput}
          onChange={(e) => {
            if (checkValid(e.target.value, "year"))
              changeValidThruYear(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default memo(FormValidThru);
