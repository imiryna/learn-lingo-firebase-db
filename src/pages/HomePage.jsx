import React from "react";
import { Link } from "react-router-dom";
// import Teachers from "./TeachersPage";
import { ReactComponent as Logo } from "../asserts/ukraine.svg";

const HomePage = () => {
  return (
    <>
      <nav>
        <div>{Logo}</div>
        <div>LearnLingo</div>
      </nav>
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
