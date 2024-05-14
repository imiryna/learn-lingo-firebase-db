import { configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "./themeToggle/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
