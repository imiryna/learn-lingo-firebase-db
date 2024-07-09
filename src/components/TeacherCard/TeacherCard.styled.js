import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--gray-bgrnd);
`;

export const WraperCardCss = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 48px;
  background-color: var(--background);
  border: 1px solid red;
  border-radius: 24px;

  padding: 24px;
`;

export const AvatarWrap = styled.div`
  width: 120px;
  height: 120px;
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

export const NameCss = styled.div`
  font-family: var(--primery-font);
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
  /* letter-spacing: 0%; */
  color: var(--primery-blacks);
  text-align: left;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  padding: 0px;
  margin-bottom: 32px;
`;
