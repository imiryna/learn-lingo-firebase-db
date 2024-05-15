import React from "react";
import { useSelector } from "react-redux";
import { selectColor } from "../../Store/themeToggle/themeSlice";

/* styled */
import { MainContainer, StatisticBlock, InfoBlok, ImgBlockCss, BtnCss } from "./HomeContent.styled";
import { ThemeProvider } from "styled-components";

export const HomeContent = () => {
  const color = useSelector(selectColor);

  return (
    <>
      <MainContainer>
        <ThemeProvider theme={{ theme: color }}>
          <InfoBlok>
            <div>Unlock your potential with the best language tutors</div>
            <p>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
            <BtnCss>Get started</BtnCss>
          </InfoBlok>
          <ImgBlockCss></ImgBlockCss>

          <StatisticBlock>
            <div>
              <div>
                <span>32,000 +</span>
                <span>Experienced tutors</span>
              </div>
            </div>
            <div>
              <div>
                <span>300,000 +</span>
                <span>5-star tutor reviews</span>
              </div>
            </div>
            <div>
              <div>
                <span>120 +</span>
                <span>Subjects taught</span>
              </div>
            </div>
            <div>
              <div>
                <span>200 +</span>
                <span>Tutor nationalities</span>
              </div>
            </div>
          </StatisticBlock>
        </ThemeProvider>
      </MainContainer>
    </>
  );
};
