import React from "react";
import { WraperCardCss, Container, AvatarWrap, Avatar, NameCss } from "./TeacherCard.styled";

export const TeacherCard = ({ cardInfo }) => {
  return (
    <Container>
      <WraperCardCss>
        <AvatarWrap>
          <Avatar src={cardInfo.avatar_url} alt={cardInfo.name}></Avatar>
        </AvatarWrap>
        <div>
          <div>
            <NameCss>
              {cardInfo.name} {cardInfo.surname}
            </NameCss>
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
    </Container>
  );
};
