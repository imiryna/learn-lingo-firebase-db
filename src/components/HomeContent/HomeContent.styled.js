import styled from "styled-components";
import theme from "styled-theming";
import Block from "../../asserts/block.jpeg";
import BlueBlock from "../../asserts/block-blue.png";
import GreenBlock from "../../asserts/block-green.png";
import PinkBlock from "../../asserts/block-pink.png";
import CreamBlock from "../../asserts/block-cream.png";

export const backgroundImg = theme("theme", {
  yellow: Block,
  green: GreenBlock,
  blue: BlueBlock,
  pink: PinkBlock,
  cream: CreamBlock,
});

export const borderColor = theme("theme", {
  yellow: "repeating-linear-gradient(146deg, #f4c550, #f4c550 12px, transparent 12px, transparent 23px, #f4c550 23px), repeating-linear-gradient(236deg, #f4c550, #f4c550 12px, transparent 12px, transparent 23px, #f4c550 23px), repeating-linear-gradient(-34deg, #f4c550, #f4c550 12px, transparent 12px, transparent 23px, #f4c550 23px), repeating-linear-gradient(56deg, #f4c550, #f4c550 12px, transparent 12px, transparent 23px, #f4c550 23px)",
  green: "repeating-linear-gradient(146deg, #9fbaae, #9fbaae 12px, transparent 12px, transparent 23px, #9fbaae 23px), repeating-linear-gradient(236deg, #9fbaae, #9fbaae 12px, transparent 12px, transparent 23px, #9fbaae 23px), repeating-linear-gradient(-34deg, #9fbaae, #9fbaae 12px, transparent 12px, transparent 23px, #9fbaae 23px), repeating-linear-gradient(56deg, #9fbaae, #9fbaae 12px, transparent 12px, transparent 23px, #9fbaae 23px)",
  blue: "repeating-linear-gradient(146deg, #9fb7ce, #9fb7ce 12px, transparent 12px, transparent 23px, #9fb7ce 23px), repeating-linear-gradient(236deg, #9fb7ce, #9fb7ce 12px, transparent 12px, transparent 23px, #9fb7ce 23px), repeating-linear-gradient(-34deg, #9fb7ce, #9fb7ce 12px, transparent 12px, transparent 23px, #9fb7ce 23px), repeating-linear-gradient(56deg, #9fb7ce, #9fb7ce 12px, transparent 12px, transparent 23px, #9fb7ce 23px)",
  pink: "repeating-linear-gradient(146deg, #e0a39a, #e0a39a 12px, transparent 12px, transparent 23px, #e0a39a 23px), repeating-linear-gradient(236deg, #e0a39a, #e0a39a 12px, transparent 12px, transparent 23px, #e0a39a 23px), repeating-linear-gradient(-34deg, #e0a39a, #e0a39a 12px, transparent 12px, transparent 23px, #e0a39a 23px), repeating-linear-gradient(56deg, #e0a39a, #e0a39a 12px, transparent 12px, transparent 23px, #e0a39a 23px)",
  cream: "repeating-linear-gradient(146deg, #f0aa8d, #f0aa8d 12px, transparent 12px, transparent 23px, #f0aa8d 23px), repeating-linear-gradient(236deg, #f0aa8d, #f0aa8d 12px, transparent 12px, transparent 23px, #f0aa8d 23px), repeating-linear-gradient(-34deg, #f0aa8d, #f0aa8d 12px, transparent 12px, transparent 23px, #f0aa8d 23px), repeating-linear-gradient(56deg, #f0aa8d, #f0aa8d 12px, transparent 12px, transparent 23px, #f0aa8d 23px)",
});

export const MainContainer = styled.section`
  padding-top: 88px;
  padding-left: 64px;
  padding-right: 64px;
  padding-bottom: 30px;

  display: grid;
  align-items: center;
  gap: 24px 24px;
  grid-template-columns: 720px 568px;
  grid-template-rows: 530px 116px;
`;
export const InfoBlok = styled.div``;

export const ImgBlockCss = styled.img`
  display: block;
  width: 568px;
  height: 530px;
  border-radius: 30px;
  border-color: white;
  content: url(${backgroundImg});
`;
export const StatisticBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 100px;
  grid-column: 1/3;

  padding: 40px 123px;
  box-sizing: border-box;
  background-image: ${borderColor};
  border-radius: 30px;
  background-size: 2px 100%, 100% 2px, 2px 100%, 100% 2px;
  background-position: 0 0, 0 0, 100% 0, 0 100%;
  background-repeat: no-repeat;
`;
