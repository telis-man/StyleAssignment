import FormValidation from "./features/components/FormValidation";
import RegistrationForm from "./features/components/RegistrationForm";

function App() {
  return (
    <div className="App">
      <FormValidation validate={true}>
        {() => <RegistrationForm />}
      </FormValidation>
    </div>
  );
}

export default App;
