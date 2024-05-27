import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllTeachers } from "../../services/api";

export const getAllteachersThunk = createAsyncThunk(
  "teachers/getAllteachers",

  async (_, thunkAPI) => {
    try {
      const res = await getAllTeachers();
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
