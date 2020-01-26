import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  z-index: 99;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

export const HeaderLink = styled(Link)`
  padding: 1rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ccc;
    color: #555;
  }
`;

export const HeaderNav = styled.nav`
  margin: 0;
  padding: 0;
  height: 100%;
`;

export const HeaderButton = styled.button`
  cursor: pointer;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 0;
  padding: 1rem;
  margin: 0;

  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ccc;
    color: #555;
  }
`;
