import React from "react";
import Block from "../../asserts/block.jpeg";
import { MainContainer, ImgCss } from "./HomeContetn.styled";
export const HomeContetn = () => {
  return (
    <>
      <MainContainer>
        <div>
          <div>
            <div>Unlock your potential with the best language tutors</div>
            <p>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
            <button>Get started</button>
          </div>

          <ImgCss src={Block} alt="" />
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </MainContainer>
    </>
  );
};
