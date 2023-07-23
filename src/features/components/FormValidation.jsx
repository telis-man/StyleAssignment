const FormValidation = ({ children, validate }) => {
  return validate ? children() : null;
};

export default FormValidation;
