import React from "react";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faUser, faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "../../core/components/Button";
import "./FormStyle.scss";
import InputWithIcon from "../../core/components/InputWithIcon";

//Icons are not completely accurate because there was no identical icons on fontawesome

export const Form = () => {
  const handleButtonClick = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Submited Successfully");
  };
  return (
    <>
      <form className="formComponent" onSubmit={handleSubmit}>
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

          <InputWithIcon
            icon={faUser}
            placeholder={"Joy Shabeb"}
            label="Name"
            inputType="text"
          />

          <InputWithIcon
            icon={faEnvelope}
            placeholder={"abc@gmail.com"}
            label="Email"
            inputType="email"
          />

          <InputWithIcon
            icon={faLock}
            placeholder={"●●●●●●●●"}
            label="Password"
            inputType="password"
          />
          <button type="submit" className="submitButton">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
