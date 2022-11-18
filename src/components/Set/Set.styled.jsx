import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SetStyled = styled.div`
  width: 100%;
  min-height: 95.5vh;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 2vw;
  padding: 4vw;
`;

export const HeaderMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4vw;
`;

export const Link = styled(NavLink)`
  color: #5c5c5c;
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
    color: #a0a0a0;
  }
`;

export const ButtonAdd = styled.button`
  color: #8e5ac2;
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
    color: #a993be;
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
  background: linear-gradient(180deg, #faf0ff 0%, #ecd7ff 100%);
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
  margin-bottom: 6vw;
`;

export const Title = styled.h2`
  font-size: 6vw;
  font-weight: 400;
  margin-right: auto;
  color: #5c5c5c;
`;

export const ButtonDelete = styled.button`
  width: 6vw;
  height: 6vw;
  border: none;
  background-color: transparent;
  font-size: 6vw;
  /* color: #f57878; */
  color: #8e5ac2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  position: relative;
  top: 1vw;
  cursor: pointer;
  transition: all 0.3s;
  &:hover,
  &:focus {
    color: #a993be;
  }
  &:first-of-type {
    font-size: 5.6vw;
    color: #5c5c5c;
    margin-right: 3vw;
    &:hover,
    &:focus {
      color: #a0a0a0;
    }
  }
`;

export const ExerciseList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2vw;
`;

export const ExerciseItem = styled.li`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 2vw;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: baseline;
  background-color: #f9f9f9;
  color: #5c5c5c;
  &:nth-child(1) {
    width: 22vw;
    height: 24vw;
    /* font-size: 5vw; */
    padding: 3vw 3vw 2vw 3vw;
  }
  &:nth-child(2) {
    width: 22vw;
    height: 23vw;
    /* font-size: 4.4vw; */
    padding: 3vw 3vw 2vw 3vw;
  }
  &:nth-child(3) {
    width: 22vw;
    height: 22vw;
    /* font-size: 3.8vw; */
    padding: 3vw 3vw 2vw 3vw;
  }
  &:nth-child(4) {
    width: 12vw;
    height: 12vw;
    padding: 0;
    & > button {
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
    }
  }
`;

export const Paragraph = styled.p`
  &:nth-child(1) {
    font-size: 3.4vw;
    margin-bottom: auto;
    opacity: 0.6;
  }
  &:nth-child(2) {
    font-size: 3.4vw;
    margin-bottom: 0.4vw;
    & > span {
      font-size: 4.4vw;
    }
  }
  &:nth-child(3) {
    font-size: 3vw;
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
  color: #5c5c5c;
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
