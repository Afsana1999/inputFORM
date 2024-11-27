import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./feautures/formSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([]),
});

export default store;
