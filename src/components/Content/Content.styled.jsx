import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ContentStyled = styled.div`
  width: 100%;
  height: calc(100vh - 8vw);
  /* height: 100vh; */
  /* background-color: teal; */
  display: flex;
  align-items: center;
`;

export const List = styled.ul`
  width: 100%;
  list-style: none;
`;
export const Item = styled.li`
  margin-bottom: 4vw;
  padding-left: 16vw;
  padding-right: 16vw;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const Link = styled(NavLink)`
  width: 100%;
  height: 100%;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 2vw;
  color: #5c5c5c;
  padding: 2vw 0;
  font-size: 5vw;
  font-weight: 400;
  text-align: center;
  cursor: pointer;
`;
