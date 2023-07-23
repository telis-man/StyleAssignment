import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputWithIcon = ({ icon, placeholder, label, inputType }) => {
  return (
    <>
      <label>
        {label}
        <div className="input-field">
          <input type={inputType} placeholder={placeholder} />
          <FontAwesomeIcon icon={icon} className="icon" />
        </div>
      </label>
    </>
  );
};

export default InputWithIcon;
