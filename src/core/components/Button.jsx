import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ButtonStyle.scss";

const Button = ({ label, icon, onClick, isFacebook }) => {
  const namesOfClases = isFacebook
    ? "button-with-icon facebookStyle"
    : "button-with-icon";
  return (
    <button className={namesOfClases} onClick={onClick}>
      <FontAwesomeIcon icon={icon} className="button-icon" />
      <span>{label}</span>
    </button>
  );
};

export default Button;
