import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 1,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    nextStep: (state) => {
      state.currentStep += 1;
    },
  },
});

export const { nextStep } = formSlice.actions;
export default formSlice.reducer;
