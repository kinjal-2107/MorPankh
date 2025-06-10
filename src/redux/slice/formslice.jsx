// src/slice/formslice.js
import { createSlice } from "@reduxjs/toolkit";

const formslice = createSlice({
  name: "form",
  initialState: {
    isvisible: false,
    signvisible: false,
  },
  reducers: {
    showSignupForm(state) {
      state.isvisible = true;
      state.signvisible = true;
    },

    showLoginForm(state) {
      state.isvisible = true;
      state.signvisible = false;
    },

    hideModal(state) {
      state.isvisible = false;
    },
  },
});

export const { showLoginForm, showSignupForm, hideModal } = formslice.actions;
export default formslice.reducer;
