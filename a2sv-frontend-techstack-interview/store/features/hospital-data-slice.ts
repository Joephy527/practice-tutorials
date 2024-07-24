import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

const hospitalSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setItems(state, action) {
      state.value = action.payload;
    },
  },
});
export const { setItems } = hospitalSlice.actions;
export default hospitalSlice.reducer;
