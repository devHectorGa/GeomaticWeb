import styled from "styled-components";

export const TableContainer = styled.div`
  margin: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & div:not(:first-child) {
    cursor: pointer;
    transition: background-color ease-in 0.2s;

    &:hover {
      background-color: #aaa;
    }
  }
`;

export const TableColumn = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 2fr;
`;

export const TableTitle = styled.h3``;
