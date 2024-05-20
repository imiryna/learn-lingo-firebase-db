import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ContextSection = styled.section`
  /* padding-left: 128px;
  padding-right: 128px; */
`;
export const NavigationCss = styled.nav`
  padding-top: 30px;
  padding-left: 128px;
  padding-right: 128px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LogoCss = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  margin-right: 390px;
`;
export const LogoText = styled.div`
  white-space: normal;
`;

export const LinksBoxCss = styled.div`
  margin-right: 268px;
`;

export const NavLinkCss = styled(NavLink)`
  text-decoration: none;
  color: black;

  &:first-child {
    margin-right: 28px;
  }
`;

export const WraperOfSvg = styled.div`
  /* border: dashed rgb(232, 230, 230) 1px;
  width: 20px;
  height: 20px; */
`;
export const ButtonCss = styled.button`
  display: block;
  padding: 14px 39px;
  border-radius: 12px;
  border: solid rgb(18, 20, 23) 1px;
  color: rgb(255, 255, 255);
  background: rgb(18, 20, 23);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
