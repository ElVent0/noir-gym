import styled from "styled-components";
import { NavLink } from "react-router-dom";
import imageFive from "../../media/legs.png";
import imageFour from "../../media/shoulders.png";
import imageSix from "../../media/back.png";
import imageTwo from "../../media/triceps.png";
import imageOne from "../../media/biceps.png";
import imageThree from "../../media/chest.png";

export const StyledContent = styled.div`
  position: relative;
`;

export const ContentStyled = styled.div`
  width: 100%;
  position: relative;
  padding-top: 46vw;
`;

export const Header = styled.div`
  position: absolute;
  top: 14vw;
  z-index: 1001;
`;

export const Logo = styled.img`
  width: 54vw;
  position: absolute;
  top: 0vw;
  z-index: 1001;
  width: 54vw;
  margin-bottom: 4vw;
`;

export const Title = styled.h1`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;

export const Calendar = styled.div`
  border-radius: 2vw;
  padding: 6vw 4vw 4vw 4vw;
  background: linear-gradient(
    135deg,
    #b7b7b72e 0%,
    #212121a7 30%,
    #e7e7e741 100%
  );
  backdrop-filter: blur(2vw);
  margin-bottom: 4vw;
  position: relative;
  z-index: 1002;
`;

export const CalendarTitle = styled.h2`
  font-size: 7.6vw;
  font-weight: 900;
  letter-spacing: 0.2vw;
  margin-bottom: 2vw;
  color: #f9f9f9;
`;

export const CalendarParagraph = styled.p`
  font-size: 5.4vw;
  font-weight: 100;
  letter-spacing: 0.2vw;
  margin-bottom: 2vw;
  color: #f9f9f9;
`;

export const CalendarInfo = styled.p`
  font-size: 3.6vw;
  font-weight: 100;
  letter-spacing: 0.2vw;
  margin-bottom: 2vw;
  color: #f9f9f9af;
`;

export const CalendarSpan = styled.span`
  font-size: 3.4vw;
  font-weight: 100;
  letter-spacing: 0.2vw;
  margin-bottom: 6vw;
  color: #5c5c5c;
  background-color: #f9f9f9;
  border-radius: 1vw;
  padding: 0.8vw 1.4vw;
  margin-right: 2vw;
  &:last-child {
    margin-right: 0;
  }
`;

export const MainContent = styled.div`
  border-radius: 2vw;
  padding: 8vw 4vw 4vw 4vw;
  background: linear-gradient(
    135deg,
    #b7b7b72e 0%,
    #212121a7 30%,
    #e7e7e741 100%
  );
  backdrop-filter: blur(2vw);
  margin-bottom: 4vw;
  position: relative;
  z-index: 1002;
`;

export const Info = styled.p`
  font-size: 6vw;
  font-weight: 100;
  letter-spacing: 0.2vw;
  margin-bottom: 6vw;
  color: #f9f9f9;
`;

export const List = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 2vw;
`;
export const Item = styled.li`
  width: 44%;
  flex-grow: 1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 2vw;
  background-size: contain;
  background-repeat: no-repeat;
  transition: 0.3s;
  &:nth-child(2n + 1) {
    background-position: right;
    & > a {
      padding: 4vw 19vw 2vw 4vw;
    }
  }
  &:nth-child(2n) {
    background-position: left;
    & > a {
      padding: 4vw 4vw 2vw 19vw;
    }
  }
  &:nth-child(1) {
    background-image: url(${imageFive}),
      linear-gradient(
        -45deg,
        #e2e2e290 0%,
        #ffffff50 30%,
        #e2e2e210 70%,
        #e2e2e230 100%
      );
    &:hover,
    &:focus {
      background-image: url(${imageFive}),
        linear-gradient(
          -45deg,
          #e2e2e2ab 0%,
          #ffffff73 30%,
          #e2e2e226 70%,
          #e2e2e24e 100%
        );
    }
  }
  &:nth-child(2) {
    background-image: url(${imageFour}),
      linear-gradient(
        135deg,
        #e2e2e290 0%,
        #ffffff50 30%,
        #e2e2e210 70%,
        #e2e2e230 100%
      );
    &:hover,
    &:focus {
      background-image: url(${imageFour}),
        linear-gradient(
          135deg,
          #e2e2e2ab 0%,
          #ffffff73 30%,
          #e2e2e226 70%,
          #e2e2e24e 100%
        );
    }
    text-align: right;
  }
  &:nth-child(3) {
    background-image: url(${imageSix}),
      linear-gradient(
        -45deg,
        #e2e2e290 0%,
        #ffffff50 30%,
        #e2e2e210 70%,
        #e2e2e230 100%
      );
    &:hover,
    &:focus {
      background-image: url(${imageSix}),
        linear-gradient(
          -45deg,
          #e2e2e2ab 0%,
          #ffffff73 30%,
          #e2e2e226 70%,
          #e2e2e24e 100%
        );
    }
  }
  &:nth-child(4) {
    background-image: url(${imageTwo}),
      linear-gradient(
        135deg,
        #e2e2e290 0%,
        #ffffff50 30%,
        #e2e2e210 70%,
        #e2e2e230 100%
      );
    &:hover,
    &:focus {
      background-image: url(${imageTwo}),
        linear-gradient(
          135deg,
          #e2e2e2ab 0%,
          #ffffff73 30%,
          #e2e2e226 70%,
          #e2e2e24e 100%
        );
    }
    text-align: right;
  }
  &:nth-child(5) {
    background-image: url(${imageThree}),
      linear-gradient(
        -45deg,
        #e2e2e290 0%,
        #ffffff50 30%,
        #e2e2e210 70%,
        #e2e2e230 100%
      );
    &:hover,
    &:focus {
      background-image: url(${imageThree}),
        linear-gradient(
          -45deg,
          #e2e2e2ab 0%,
          #ffffff73 30%,
          #e2e2e226 70%,
          #e2e2e24e 100%
        );
    }
  }
  &:nth-child(6) {
    background-image: url(${imageOne}),
      linear-gradient(
        135deg,
        #e2e2e290 0%,
        #ffffff50 30%,
        #e2e2e210 70%,
        #e2e2e230 100%
      );
    &:hover,
    &:focus {
      background-image: url(${imageOne}),
        linear-gradient(
          135deg,
          #e2e2e2ab 0%,
          #ffffff73 30%,
          #e2e2e226 70%,
          #e2e2e24e 100%
        );
    }
    text-align: right;
  }
`;

export const Link = styled(NavLink)`
  color: #f9f9f9;
  cursor: pointer;
`;

export const Paragraph = styled.p`
  font-size: 4.8vw;
  font-weight: 600;
`;

export const NumberOfExercises = styled.p`
  font-size: 3.4vw;
`;

export const Gif = styled.img`
  width: 90vw;
  position: absolute;
  top: 0vw;
  left: 16vw;
  transform: scale(-1, 1);
`;

export const Gradient = styled.div`
  position: absolute;
  z-index: 1000;
  &:first-of-type {
    background: radial-gradient(
      #d778ffe5 2.54%,
      #d778ff38 40%,
      transparent 70%
    );
    width: 90vw;
    height: 90vw;
    top: -10vw;
    left: -10vw;
    animation: animateTop 10000ms infinite 1000ms linear;
  }
  &:last-of-type {
    background: radial-gradient(
      #d778ff60 4%,
      #d778ff40 20%,
      #d778ff10 40%,
      transparent 60%
    );
    width: 200vw;
    height: 200vw;
    top: 80vw;
    left: -100vw;
    animation: animateSize 5000ms infinite 4000ms linear;
  }
  @keyframes animateTop {
    0% {
      transform: translateX(0);
    }

    50% {
      transform: translateX(50vw);
    }

    100% {
      transform: translateX(0px);
    }
  }
  @keyframes animateSize {
    0% {
      transform: scale(2);
    }

    50% {
      transform: scale(4);
    }

    100% {
      transform: scale(2);
    }
  }
`;
