import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../components/Navigation/Navigation";

const HomePage = () => {
  return (
    <>
      <Navigation />
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
