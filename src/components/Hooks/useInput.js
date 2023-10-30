import { useState } from "react";

import { isEmail, isNotEmpty, hasMinLength } from "../../util/validation";

export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);
  const isValid = validationFn(enteredValue);

  const inputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setDidEdit(false);
    
  };

  const inputBlurHandler = () => {
    setDidEdit(true);
  };

  return {
    value: enteredValue,
    inputChangeHandler,
    inputBlurHandler,
    hasError: didEdit && !isValid,
  };
}
