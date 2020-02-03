import styled from "styled-components";

export const TableContainer = styled.div`
  margin: 0;
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
  width: 90vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const TableTitle = styled.h3``;
