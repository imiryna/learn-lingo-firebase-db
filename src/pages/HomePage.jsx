import React from "react";
import { Link } from "react-router-dom";

import { HomeContetn } from "../components/HomeContetn/HomeContetn";

const HomePage = () => {
  return (
    <>
      <HomeContetn />
      <Link to={"/teachers"}>Teachers</Link>
    </>
  );
};

export default HomePage;
