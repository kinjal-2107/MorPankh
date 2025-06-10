import { configureStore } from "@reduxjs/toolkit";
import formReducres from "./slice/formslice";

const store = configureStore({
  reducer: {
    form: formReducres,
  },
});

export default store;
