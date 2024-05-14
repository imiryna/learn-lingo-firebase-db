import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  color: "yellow",
};

const themeSlice = createSlice({
  name: "theme",

  initialState: INITIAL_STATE,

  reducers: {
    setColor(state, action) {
      state.color = action.payload;
    },
  },
});

export const themeReducer = themeSlice.reducer;
export const { setColor } = themeSlice.actions;

export const selectColor = (state) => state.color;
