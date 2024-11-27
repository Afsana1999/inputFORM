import { useSelector } from "react-redux";
import React from "react";
import FirstInput from "./FirstInput";
import SecondInput from "./SecondInput";
import ThirdInput from "./ThirdInput";

function Form() {
  const { currentStep } = useSelector((state) => state.form.currentStep);
  if (currentStep === 1) {
    return <FirstInput />;
  } else if (currentStep === 2) {
    return <SecondInput />;
  } else if (currentStep === 3) {
    return <ThirdInput />;
  }
}

export default Form;
