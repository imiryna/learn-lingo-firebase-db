import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getAllteachersThunk } from "../teachers/teachersThunk";

const INITIAL_STATE = {
  teachers: [],
  error: null,
  isLoading: true,
};

const allTeachersSlice = createSlice({
  name: "teachers",
  initialState: INITIAL_STATE,
  extraReducers: (builder) => {
    builder.addCase(getAllteachersThunk.fulfilled, (state, action) => {
      state.teachers = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    .addCase(getAllteachersThunk.rejected, (state, { payload }) => {
        handleRejected(state, payload);
    }),
}});
