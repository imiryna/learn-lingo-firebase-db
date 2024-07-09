import styled from "styled-components";

export const WraperCardCss = styled.div`
  padding: 88px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;

  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 48px;
  background-color: var(--gray-bgrnd);
`;

export const AvatarWrap = styled.div`
  width: 128px;
  height: 128px;
  box-sizing: border-box;
  border: 3px solid rgb(251, 233, 186);
  border-radius: 100px;

  background: rgb(255, 255, 255);
`;

export const Avatar = styled.img`
  width: 96px;
  height: 96px;
  box-sizing: border-box;
  margin: 12px;
  border-radius: 100px;

  background: rgb(255, 255, 255);
`;
