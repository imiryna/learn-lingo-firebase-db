import React from "react";
import Home from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
