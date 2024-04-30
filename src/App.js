import React from "react";
import Home from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Teachers from "./pages/TeachersPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/teachers" element={<Teachers />} />
    </Routes>
  );
};
