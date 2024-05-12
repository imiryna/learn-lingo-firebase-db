import { Suspense } from "react";
import Home from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import Teachers from "./pages/TeachersPage";
import Navigation from "./components/Navigation/Navigation";
import { ThemeProvider } from "styled-components";

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <ThemeProvider theme={{ theme: "yellow" }}>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="/teachers" element={<Teachers />} />
          </Route>
        </ThemeProvider>
      </Routes>
    </Suspense>
  );
};
