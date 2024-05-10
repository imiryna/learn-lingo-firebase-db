import styled from "styled-components";

export const MainContainer = styled.section`
  padding-top: 88px;
  padding-left: 64px;
  padding-right: 64px;

  display: grid;
  gap: 24px 24px;
  grid-template-columns: 720px 568px;
  grid-template-rows: 530px 116px;
`;
export const InfoBlok = styled.div``;

export const ImgCss = styled.img`
  display: block;
`;
export const StatisticBlock = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 100px;
  grid-column: 1/3;

  padding: 40px 123px;
`;
