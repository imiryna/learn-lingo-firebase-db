import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./themeToggle/themeSlice";
import { teachersReducer } from "./teachers/teachersSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    teachers: teachersReducer,
  },
});
