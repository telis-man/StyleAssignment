import React from "react";
import Form from "./Form";
import illustrationImage from "../../assets/illustration.svg";
import logo from "../../assets/logo.svg";
import "./RegistrationFormStyle.scss";

export const RegistrationForm = ({}) => {
  return (
    <div className="wrapper">
      <div className="imgContainer">
        <img src={logo} className="logo" alt="logo" />
        <img
          src={illustrationImage}
          alt="Illustration"
          className="illustrationImage"
        />
        <p>
          Start for free & Get
          <br /> attractive Offers Today !
        </p>
      </div>
      <div className="formContainer">
        <Form />
      </div>
    </div>
  );
};

export default RegistrationForm;
