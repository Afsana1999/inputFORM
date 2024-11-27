import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../feautures/formSlice";

export default configureStore({
  reducer: {
    form: formReducer,
  },
});
