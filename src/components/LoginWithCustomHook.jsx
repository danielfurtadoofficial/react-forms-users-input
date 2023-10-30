import Input from "./UI/Input";
import { isEmail, isNotEmpty, hasMinLength } from "../util/validation";
import { useInput } from "./Hooks/useInput";

export default function Login() {
  const {
    value: enteredEmail,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    hasError: emailHasError,
  } = useInput("", (value) => isEmail(value) && isNotEmpty(value));

  const {
    value: enteredPassword,
    inputChangeHandler: passwordInputChangeHandler,
    inputBlurHandler: passwordInputBlurHandler,
    hasError: passwordHasError,
  } = useInput("", (value) => hasMinLength(value, 6));

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }
    console.log(enteredEmail, enteredPassword);
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
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
          error={emailHasError && "Please enter a valid email!"}
        ></Input>

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onChange={passwordInputChangeHandler}
          onBlur={passwordInputBlurHandler}
          value={enteredPassword}
          error={passwordHasError && "Please enter a valid password!"}
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
