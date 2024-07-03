import React from "react";
import { WraperCardCss } from "./TeacherCard.styled";
import { useSelector } from "react-redux";

export const TeacherCard = () => {
  const card = useSelector();

  return (
    <>
      <WraperCardCss>
        <div>Lorem, ipsum dolor sit amet consectetur tempore.</div>
        <div>
          <div>
            <div>Languages</div>
            <div></div>
          </div>
          <div></div>
          <div></div>
          <div>
            <div>#A1 Beginner</div>
            <div>#A2 Elementary</div>
            <div>#B1 Intermediate</div>
            <div>#B1 Intermediate</div>
          </div>
        </div>
      </WraperCardCss>
    </>
  );
};
