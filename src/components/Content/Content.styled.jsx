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
  /* height: calc(100vh - 50vw); */
  /* display: flex;
  align-items: center; */
`;

export const Logo = styled.img`
  width: 40vw;
  margin-bottom: 26vw;
  position: relative;
  top: 12vw;
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
