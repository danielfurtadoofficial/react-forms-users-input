import { useState } from "react";
import Input from "./UI/Input";
import {isEmail, isNotEmpty, hasMinLength, isEqualsToOtherValue} from "../util/validation"

export default function Login() {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid = didEdit.email && !isEmail(enteredValues.email);
  const passwordIsInvalid =
    didEdit.password && !hasMinLength(enteredValues.password, 6);

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    console.log(enteredValues);
  };

  const inputChangeHandler = (identifier, value) => {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));

    setDidEdit((prevValues) => ({
      ...prevValues,
      [identifier]: false,
    }));
  };

  const inputBlurHandler = (identifier) => {
    setDidEdit((prevValues) => ({
      ...prevValues,
      [identifier]: true,
    }));
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onChange={(event) => {
            inputChangeHandler("email", event.target.value);
          }}
          onBlur={() => {
            inputBlurHandler("email");
          }}
          value={enteredValues.email}
          error={emailIsInvalid && "Please enter a valid email!"}
        ></Input>

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={(event) => {
            inputChangeHandler("password", event.target.value);
          }}
          onBlur={() => {
            inputBlurHandler("password");
          }}
          value={enteredValues.password}
          error={passwordIsInvalid && "Please enter a valid password!"}
        ></Input>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button" type="submit">
          Login
        </button>
      </p>
    </form>
  );
}
