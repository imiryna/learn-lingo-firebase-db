import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../asserts/ukraine.svg";
import { ReactComponent as YellowArrow } from "../../asserts/log-in-01.svg";
// import { ReactComponent as GreenArrow } from "../../asserts/log-in-02.svg";
// import { ReactComponent as BlouArrow } from "../../asserts/log-in-03.svg";
// import { ReactComponent as PinkArrow } from "../../asserts/log-in-04.svg";

import { ContextSection, NavigationCss, LogoCss, LinksCss } from "./Navigation.styled";

const Navigation = () => {
  return (
    <>
      <ContextSection>
        <NavigationCss>
          <LogoCss>
            <Logo />
            <div>LearnLingo</div>
          </LogoCss>
          <LinksCss>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/teachers">Teachers</NavLink>
          </LinksCss>
          <div>
            <YellowArrow />
            <div>Log in</div>
            <button type="button">Registration</button>
          </div>
        </NavigationCss>
        <Outlet />
      </ContextSection>
    </>
  );
};

export default Navigation;
