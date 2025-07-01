import { configureStore } from "@reduxjs/toolkit";
import formReducers from "./slice/formslice";
import searchReducers from "./slice/searchslice";

const store = configureStore({
  reducer: {
    form: formReducers,
    search: searchReducers,
  },
});

export default store;
