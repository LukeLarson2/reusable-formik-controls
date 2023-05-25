import React from "react";
import "./App.css"; // Add the following import for self CSS styling
// import { ThemeProvider, theme } from "@chakra-ui/react";
import LoginChakra from "./components/LoginChakra";
import EnrollmentForm from "./components/EnrollmentForm";
import LoginForm from "./components/LoginForm";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <div className="App">
      {/* <LoginForm /> */}
      {/* <RegistrationForm /> */}
      <EnrollmentForm />
    </div>
  );
}

export default App;
