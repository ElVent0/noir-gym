import styled from "styled-components";

export const LayoutStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 4vw 4vw;
  @media (min-width: 768px) {
    padding: 0;
  }
  /* @media (min-width: 768px) {
    transform: scale(0.4);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 1200px) {
    transform: scale(0.24);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  } */
`;

export const Media = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #2d2d2d99 2.54%, #54545499 100%);
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5vw);

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MediaInfo = styled.div`
  border-radius: 1vw;
  padding: 3vw;
  background: linear-gradient(
    135deg,
    #b7b7b72e 0%,
    #212121a7 30%,
    #e7e7e741 100%
  );
  width: 60vw;
  @media (max-width: 1200px) {
    width: 80vw;
  }
`;

export const MediaParagraph = styled.p`
  color: #f9f9f9;
  font-size: 1vw;
  margin-bottom: 1vw;
  @media (max-width: 1200px) {
    font-size: 1.8vw;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;
