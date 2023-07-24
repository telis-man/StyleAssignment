import React from "react";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faUser, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../core/components/Button";
import "./FormStyle.scss";

import FormValidation from "./FormValidation";

//Icons are not completely accurate because there was no identical free icons on fontawesome

export const Form = () => {
  const handleButtonClick = () => {};

  const handleSubmit = (e, formData) => {
    e.preventDefault();

    if (isFormValid(formData)) {
      alert("Form data submitted!");
    } else {
      alert("Please fill in all fields.");
    }
  };

  const isFormValid = (formData) => {
    return Object.values(formData).every((value) => value !== "");
  };

  return (
    <FormValidation>
      {(formData, handleInputChange, isFormValid) => (
        <form
          className="formComponent"
          onSubmit={(e) => handleSubmit(e, formData)}
        >
          <h1>Get Started</h1>
          <p>Already have an account?</p>
          <a href="google.com" className="logInButton">
            Log in
          </a>
          <div className="buttonContainer">
            <Button
              label="sign up"
              icon={faGoogle}
              onClick={handleButtonClick}
              isFacebook={false}
            />
            <Button
              label="sign up"
              icon={faFacebook}
              isFacebook={true}
              onClick={handleButtonClick}
            />
          </div>
          <div className="alignedInCenter">
            <h2>Or</h2>

            <label htmlFor="name">Name </label>
            <div className="input-field">
              <input
                id="name"
                value={formData.name}
                type="text"
                placeholder="Joy Shabeb"
                onChange={handleInputChange}
                name="name"
              />
              <FontAwesomeIcon icon={faUser} className="icon" />
            </div>

            <label htmlFor="email">Email </label>
            <div className="input-field">
              <input
                id="email"
                value={formData.email}
                type="email"
                placeholder="abc@gmail.com"
                onChange={handleInputChange}
                name="email"
              />
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </div>

            <label htmlFor="password">Password </label>
            <div className="input-field">
              <input
                id="password"
                onChange={handleInputChange}
                type="password"
                placeholder="●●●●●●●●"
                value={formData.password}
                name="password"
              />
              <FontAwesomeIcon icon={faLock} className="icon" />
            </div>

            <button type="submit" className="submitButton">
              Submit
            </button>
          </div>
        </form>
      )}
    </FormValidation>
  );
};

export default Form;
