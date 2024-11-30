import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 1,
  firstData: {
    Name: "",
    Email: "",
    "Mobil number": "",
    "Address line 1": "",
    "Address line 2": "",
    "Address line 3": "",
  },
  secondData: {
    "Building name": "",
    "City area": "",
    "Landline number": "+994 ",
    "Address line 1": "",
    "Address line 2": "",
    "PO Box Number": "",
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.currentStep += 1;
    },
    prevStep: (state) => {
      state.currentStep -= 1;
    },
    firstStep: (state) => {
      state.currentStep = 1;
    },
    secondStep: (state) => {
      state.currentStep = 2;
    },
    thirdStep: (state) => {
      state.currentStep = 3;
    },
    setFirstData: (state, action) => {
      return {
        ...state,
        firstData: { ...state.firstData, ...action.payload },
      };
    },
    setSecondData: (state, action) => {
      return {
        ...state,
        secondData: { ...state.secondData, ...action.payload },
      };
    },
  },
});

export const {
  nextStep,
  setFirstData,
  firstStep,
  thirdStep,
  secondStep,
  setSecondData,
  prevStep,
} = formSlice.actions;
export default formSlice.reducer;
