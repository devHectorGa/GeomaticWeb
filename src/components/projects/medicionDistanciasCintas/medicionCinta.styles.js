import styled from "styled-components";

export const MedicionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

export const Title = styled.h2`
  grid-column: span 6;
`;

export const ValueContainer = styled.div`
  grid-column: span 2;
`;
