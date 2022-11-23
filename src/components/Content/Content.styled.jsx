import styled from "styled-components";
import { NavLink } from "react-router-dom";
import imageOne from "../../media/1.png";
import imageTwo from "../../media/2.png";
import imageThree from "../../media/3.png";
import imageFour from "../../media/4.png";
import imageFive from "../../media/5.png";
import imageSix from "../../media/6.png";

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
  /* width: 54vw;
  position: absolute;
  top: 16vw;
  z-index: 1001; */
  width: 54vw;
  margin-bottom: 4vw;
`;

export const Title = styled.h1`
  /* color: #f9f9f9;
  font-weight: 200;
  font-size: 13.6vw;
  line-height: 90%; */
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

export const MainContent = styled.div`
  border-radius: 2vw;
  padding: 8vw 4vw 4vw 4vw;
  /* background: linear-gradient(90deg, #323232 2.54%, #595959 100%); */
  background: linear-gradient(
    135deg,
    #e2e2e230 0%,
    #ffffff50 30%,
    #e2e2e230 100%
  );
  backdrop-filter: blur(2vw);
  margin-bottom: 4vw;
`;

export const Info = styled.p`
  font-size: 6vw;
  font-weight: 600;
  letter-spacing: 0.2vw;
  margin-bottom: 8vw;
  color: #f8f8f8;
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
  background-color: #f9f9f9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 2vw;
  background-size: contain;
  background-position: left;
  background-repeat: no-repeat;
  &:nth-child(1) {
    background-image: url(${imageFive});
  }
  &:nth-child(2) {
    background-image: url(${imageFour});
  }
  &:nth-child(3) {
    background-image: url(${imageSix});
  }
  &:nth-child(4) {
    background-image: url(${imageTwo});
  }
  &:nth-child(5) {
    background-image: url(${imageThree});
  }
  &:nth-child(6) {
    background-image: url(${imageOne});
  }
`;

export const Link = styled(NavLink)`
  color: #5c5c5c;
  padding: 4vw 4vw 2vw 19vw;
  cursor: pointer;
`;

export const Paragraph = styled.p`
  font-size: 4.8vw;
  font-weight: 600;
  /* margin-bottom: 1vw; */
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
