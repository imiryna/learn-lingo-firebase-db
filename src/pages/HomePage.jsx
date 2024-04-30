import React from "react";
import { Link } from "react-router-dom";
// import Teachers from "./TeachersPage";

const HomePage = () => {
  return (
    <>
      <nav></nav>
      <h1>HELLO</h1>
      <ul>
        <li>Spain</li>
        <li>Polish</li>
        <li>English</li>
      </ul>
      <Link to={"/teachers"}>Teachers</Link>
    </>
  );
};

export default HomePage;
