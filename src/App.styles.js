import styled from "styled-components";
import img1 from "./assets/topografia02.jpg";

export const AppContainer = styled.main`
  text-align: center;
  background-image: url(${img1});
  overflow: hidden;
  background-color: #606060;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  background-origin: padding-box;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: white;
  text-align: center;
  &::after {
    content: "";
    background-color: rgba(0, 0, 0, 0.6);
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
  }
`;
