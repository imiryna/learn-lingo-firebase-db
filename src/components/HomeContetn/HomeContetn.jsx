import React from "react";
import Block from "../../asserts/block.jpeg";
import { MainContainer, ImgCss, StatisticBlock, InfoBlok } from "./HomeContetn.styled";
export const HomeContetn = () => {
  return (
    <>
      <MainContainer>
        <InfoBlok>
          <div>Unlock your potential with the best language tutors</div>
          <p>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
          <button>Get started</button>
        </InfoBlok>
        <div>
          <ImgCss src={Block} alt="" />
        </div>

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
      </MainContainer>
    </>
  );
};
