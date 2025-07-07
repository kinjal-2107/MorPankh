import { createSlice } from "@reduxjs/toolkit";

const Searchslice = createSlice({
  name: "search",
  initialState: {
    open: false,
  },
  reducers: {
    handleshow(state) {
      state.open = true;
    },
    handleClose(state) {
      state.open = false;
    },
  },
});

export const { handleshow, handleClose } = Searchslice.actions;
export default Searchslice.reducer;
