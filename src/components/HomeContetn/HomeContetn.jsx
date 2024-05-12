import React from "react";
import { MainContainer, StatisticBlock, InfoBlok, ImgBlockCss } from "./HomeContetn.styled";
import { ThemeProvider } from "styled-components";

export const HomeContetn = () => {
  return (
    <>
      <MainContainer>
        <ThemeProvider theme={{ theme: "yellow" }}>
          <InfoBlok>
            <div>Unlock your potential with the best language tutors</div>
            <p>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
            <button>Get started</button>
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
