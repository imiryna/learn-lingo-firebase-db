import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../components/Navigation/Navigation";
import { HomeContetn } from "../components/HomeContetn/HomeContetn";

const HomePage = () => {
  return (
    <>
      <Navigation />
      <HomeContetn />
      <Link to={"/teachers"}>Teachers</Link>
    </>
  );
};

export default HomePage;
