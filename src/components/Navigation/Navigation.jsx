import React from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../asserts/ukraine.svg";
import { ThemeProvider } from "styled-components";
import { DropdownMenu } from "../DropdownMenu/DropdownMenu";
import { useSelector } from "react-redux";
import { selectColor } from "../../Store/themeToggle/themeSlice";

import { ReactComponent as YellowArrow } from "../../asserts/log-in-01.svg";
import { ReactComponent as GreenArrow } from "../../asserts/log-in-02.svg";
import { ReactComponent as BlueArrow } from "../../asserts/log-in-03.svg";
import { ReactComponent as PinkArrow } from "../../asserts/log-in-04.svg";
import { ReactComponent as CreamArrow } from "../../asserts/log-in-05.svg";

import { ContextSection, NavigationCss, LogoCss, LinksBoxCss, NavLinkCss, WraperOfSvg, ButtonCss, LogoText } from "./Navigation.styled";

const Navigation = () => {
  const color = useSelector(selectColor);

  const arrows = {
    yellow: <YellowArrow />,
    green: <GreenArrow />,
    blue: <BlueArrow />,
    pink: <PinkArrow />,
    cream: <CreamArrow />,
  };
  return (
    <>
      <ContextSection>
        <ThemeProvider theme={{ theme: color }}>
          <NavigationCss>
            <LogoCss>
              <Logo />
              <div>LearnLingo</div>
            </LogoCss>
            <LinksBoxCss>
              <NavLinkCss to="/">Home</NavLinkCss>
              <NavLinkCss to="/teachers">Teachers</NavLinkCss>
            </LinksBoxCss>
            <DropdownMenu />

            <LogoCss>
              <WraperOfSvg>
                {/* <LogoCss /> */}
                {/* <LoginIcon /> */}
                {arrows[color]}
              </WraperOfSvg>

              <LogoText>Log in</LogoText>
              <ButtonCss type="button">Registration</ButtonCss>
            </LogoCss>
          </NavigationCss>
        </ThemeProvider>
        <Outlet />
      </ContextSection>
    </>
  );
};

export default Navigation;
