import { createSlice } from "@reduxjs/toolkit";
import { getAllTeachersThunk } from "../teachers/teachersThunk";

const INITIAL_STATE = {
  teachers: [],
  error: null,
  isLoading: true,
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const allTeachersSlice = createSlice({
  name: "teachers",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder
      .addCase(getAllTeachersThunk.fulfilled, (state, action) => {
        state.teachers = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAllTeachersThunk.rejected, (state, { payload }) => {
        handleRejected(state, payload);
      })
      .addCase(getAllTeachersThunk.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      });
  },
});

export const teachersReducer = allTeachersSlice.reducer;
