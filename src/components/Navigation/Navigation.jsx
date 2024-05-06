import React from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../asserts/ukraine.svg";
import { ReactComponent as YellowArrow } from "../../asserts/log-in-01.svg";
// import { ReactComponent as GreenArrow } from "../../asserts/log-in-02.svg";
// import { ReactComponent as BlouArrow } from "../../asserts/log-in-03.svg";
// import { ReactComponent as PinkArrow } from "../../asserts/log-in-04.svg";

import { ContextSection, NavigationCss, LogoCss, LinksBoxCss, NavLinkCss, WraperOfSvg, ButtonCss } from "./Navigation.styled";

const Navigation = () => {
  return (
    <>
      <ContextSection>
        <NavigationCss>
          <LogoCss>
            <Logo />
            <div>LearnLingo</div>
          </LogoCss>
          <LinksBoxCss>
            <NavLinkCss to="/">Home</NavLinkCss>
            <NavLinkCss to="/teachers">Teachers</NavLinkCss>
          </LinksBoxCss>
          <LogoCss>
            <WraperOfSvg>
              <YellowArrow />
            </WraperOfSvg>
            <div>Log in</div>
            <ButtonCss type="button">Registration</ButtonCss>
          </LogoCss>
        </NavigationCss>
        <Outlet />
      </ContextSection>
    </>
  );
};

export default Navigation;
