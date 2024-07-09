import React from "react";
import { WraperCardCss } from "./TeacherCard.styled";

import { AvatarWrap, Avatar } from "./TeacherCard.styled";

export const TeacherCard = ({ cardInfo }) => {
  console.log(cardInfo.avatar_url);
  return (
    <>
      <WraperCardCss>
        <AvatarWrap>
          <Avatar src={cardInfo.avatar_url} alt={cardInfo.name}></Avatar>
        </AvatarWrap>
        <div>
          <div>
            <div>{cardInfo.name}</div>
            <div>ghggh</div>
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
