import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAllTeachersThunk } from "../teachers/teachersThunk";

const INITIAL_STATE = {
  teachers: [],
  error: null,
  isLoading: true,
};

const allTeachersSlice = createSlice({
  name: "teachers",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder.addCase(getAllTeachersThunk.fulfilled, (state, action) => {
      state.teachers = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    .addCase(getAllTeachersThunk.rejected, (state, { payload }) => {
        handleRejected(state, payload);
    }),
}});
