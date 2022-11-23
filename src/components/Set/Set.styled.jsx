import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SetStyled = styled.div`
  width: 100%;
  min-height: 95.5vh;
  /* background-color: #f9f9f9; */
  border-radius: 2vw;
  padding: 4vw;
  /* background: linear-gradient(90deg, #323232 2.54%, #595959 100%); */
  background: linear-gradient(
    135deg,
    #b7b7b72e 0%,
    #212121a7 30%,
    #e7e7e741 100%
  );
  backdrop-filter: blur(6.5px);
  -webkit-backdrop-filter: blur(6.5px);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 1003;
`;

export const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4vw;
`;

export const Link = styled(NavLink)`
  color: #f9f9f9;
  /* background-color: #ad00ff; */
  text-align: center;
  border-radius: 2vw;
  width: 14vw;
  height: 14vw;
  font-size: 14vw;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  &:hover,
  &:focus {
    color: #e8e8e8;
  }
`;

export const ButtonAdd = styled.button`
  color: #f9f9f9;
  background-color: transparent;
  text-align: center;
  width: 40vw;
  height: 10vw;
  font-size: 5.6vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2vw;
  cursor: pointer;
  /* align-items: center; */
  /* background: linear-gradient(180deg, #ad00ff 2.54%, #8000ff 100%); */
  /* padding: 6vw 4vw; */
  border: none;
  transition: all 0.3s;
  &:hover,
  &:focus {
    color: #dddddd;
  }
  > span {
    margin-left: 1.6vw;
    font-size: 3.8vw;
    position: relative;
    top: 0.6vw;
  }
`;

export const List = styled.ul``;

export const Item = styled.li`
  /* border-bottom: 1px solid #c8c8c8; */
  /* padding: 6vw 2vw; */
  /* background: linear-gradient(180deg, #faf0ff3a 0%, #ecd7ff60 100%); */
  /* background: linear-gradient(
    135deg,
    #e2e2e290 0%,
    #ffffff50 30%,
    #e2e2e210 70%,
    #e2e2e230 100%
  ); */
  background: linear-gradient(
    -45deg,
    #e2e2e290 0%,
    #ffffff50 30%,
    #e2e2e210 70%,
    #e2e2e230 100%
  );
  /* background: linear-gradient(
    135deg,
    #b7b7b72e 0%,
    #212121a7 30%,
    #e7e7e741 100%
  ); */
  /* background-color: #ffffff5c; */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 2vw;
  padding: 6vw 3vw 3vw 3vw;
  margin-bottom: 6vw;
  /* &:last-child {
    border-bottom: none;
  } */
  &:last-child {
    margin-bottom: 0;
  }
`;

// Exercise -----------------------------

export const Header = styled.div`
  display: flex;
  margin-bottom: 4vw;
`;

export const Title = styled.h2`
  max-width: 100%;
  font-size: 5.4vw;
  font-weight: 400;
  padding-right: 2vw;
  margin-right: auto;
  color: #f9f9f9;
  overflow-x: scroll;
`;

export const Description = styled.p`
  color: #f9f9f9e6;
  font-size: 3.6vw;
  margin-bottom: 4vw;
  max-width: 100%;
  overflow-x: scroll;
`;

export const ButtonDelete = styled.button`
  min-width: 7vw;
  height: 7vw;
  border: none;
  background-color: #f9f9f9;
  font-size: 5vw;
  /* color: #f57878; */
  color: #9d3bff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 2vw;
  &:hover,
  &:focus {
    color: #cf60ff;
    background-color: #e4e4e4;
  }
  &:first-of-type {
    margin-right: 4vw;
    font-size: 4.4vw;
    color: #5c5c5c;
    & > svg {
      position: relative;
      left: 0.2vw;
    }
    /* color: #f9f9f9;
    background-color: transparent;
    &:hover,
    &:focus {
      color: #dedede;
    } */
  }
`;

export const ExerciseList = styled.ul`
  display: flex;
  /* justify-content: space-between; */
  align-items: flex-end;
  gap: 2vw;
`;

export const ExerciseItem = styled.li`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 2vw;
  background: linear-gradient(
    225deg,
    #ffffff90 0%,
    #ffffff 60%,
    #ffffff 70%,
    #ffffffba 100%
  );
  color: #5c5c5c;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: baseline;
  /* background-color: #f9f9f9; */
  &:nth-child(1) {
    width: 21vw;
    height: 24vw;
    font-size: 4vw;
    padding: 3vw 3vw 2vw 3vw;
  }
  &:nth-child(2) {
    width: 20vw;
    height: 23vw;
    font-size: 3.4vw;
    padding: 3vw 3vw 2vw 3vw;
  }
  &:nth-child(3) {
    width: 19vw;
    height: 22vw;
    font-size: 2.8vw;
    padding: 3vw 3vw 2vw 3vw;
  }
  &:last-child {
    width: 12vw;
    height: 12vw;
    padding: 0;
  }
`;

export const ExecutionInfo = styled.p`
  color: #f8f8f8bd;
  font-size: 3.6vw;
  max-width: 64vw;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 2vw;
  background: linear-gradient(
    225deg,
    #94949490 0%,
    #5656562f 60%,
    #6969691f 70%,
    #949494b9 100%
  );
  /* color: #5c5c5c; */
  padding: 0 3vw;
  height: 12vw;
  display: flex;
  align-items: center;
`;

export const ButtonPlus = styled.button`
  border: none;
  background-color: transparent;
  font-size: 4.4vw;
  width: 100%;
  height: 100%;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #f9f9f9;
  background: linear-gradient(180deg, #c53dff 2.54%, #9d3bff 100%);
  border-radius: 2vw;
  transition: all 0.3s;
  &:hover,
  &:focus {
    background: linear-gradient(180deg, #d778ff 2.54%, #b66cff 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const Paragraph = styled.p`
  &:nth-child(1) {
    /* font-size: 3.4vw; */
    margin-bottom: auto;
    opacity: 0.6;
  }
  &:nth-child(2) {
    /* font-size: 3.4vw; */
    /* margin-bottom: 0.4vw; */
    & > span {
      font-size: 4.8vw;
    }
  }
  &:nth-child(3) {
    /* font-size: 3vw; */
    & > span {
      font-size: 4vw;
    }
  }
  & > span {
    font-weight: 600;
    /* color: #8e5ac2; */
  }
`;

export const InfoBlock = styled.div`
  width: 60vw;
  /* display: flex;
  justify-content: center; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f9f9f9;
  & > svg {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 4vw;
    font-size: 16vw;
    opacity: 0.6;
  }
  & > p {
    font-size: 4.4vw;
    text-align: center;
  }
  & > button {
    margin-top: 8vw;
    margin-left: auto;
    margin-right: auto;
    background: linear-gradient(180deg, #c53dff 2.54%, #9d3bff 100%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    color: #f9f9f9;
    border-radius: 2vw;
    width: 46vw;
    height: 12vw;
    transition: all 0.3s;
    & > span {
      font-size: 4.4vw;
    }
    &:hover,
    &:focus {
      background: linear-gradient(180deg, #d778ff 2.54%, #b66cff 100%);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      color: #f9f9f9;
    }
  }
`;

export const Gradient = styled.div`
  position: fixed;
  z-index: 1000;
  &:first-of-type {
    background: radial-gradient(
      #dd8effd6 4%,
      #d778ff84 20%,
      #d778ff20 50%,
      transparent 70%
    );
    width: 300vw;
    height: 300vw;
    top: -150vw;
    left: -150vw;
    animation: animateRotate 10000ms infinite linear 1000ms;
    opacity: 0.6;
  }
  @keyframes animateRotate {
    0% {
      transform: translate(0, 0);
      /* transform: translateX(0);
      transform: translateY(0); */
    }
    25% {
      transform: translate(100vw, 0);
      /* transform: translateX(300vw);
      transform: translateY(0vw); */
    }
    50% {
      transform: translate(100vw, 100vh);
      /* transform: translateX(300vw);
      transform: translateY(100vw); */
    }
    75% {
      transform: translate(0, 100vh);
      /* transform: translateX(0vw);
      transform: translateY(100vw); */
    }
    100% {
      transform: translate(0, 0);
      /* transform: translateX(0);
      transform: translateY(0); */
    }
  }
`;
