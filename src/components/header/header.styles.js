import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
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

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const HeaderLink = styled(Link)`
  padding: 1rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ccc;
    color: #555;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  cursor: pointer;
  padding: 1rem;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ccc;
    color: #555;
  }
`;

OptionLink.displayName = "OptionLink";
