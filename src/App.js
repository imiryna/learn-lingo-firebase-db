import { Suspense } from "react";
import Home from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Teachers from "./pages/TeachersPage";
import Navigation from "./components/Navigation/Navigation";

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/teachers" element={<Teachers />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
