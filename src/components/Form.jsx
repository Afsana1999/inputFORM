import { useSelector } from "react-redux";
import React from "react";
import FirstInput from "./FirstInput";
import SecondInput from "./SecondInput";
import ThirdInput from "./ThirdInput";

function Form() {
  const { currentStep } = useSelector((state) => state.form);
  if (currentStep === 1) {
    return <FirstInput />;
  } else if (currentStep === 2) {
    return <SecondInput />;
  }
  return <ThirdInput />;
}

export default Form;
