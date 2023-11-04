import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    const newName = event.target.value;
    setEnteredValue(newName);
  };

  const blurHandler = () => {
    setIsTouched(true);
  }; 

  const reset = () => {
    setEnteredValue('');
    setIsTouched(false)
  }

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError: hasError,
    valueChangeHandler,
    blurHandler,
    reset
  };
};

export default useInput;
