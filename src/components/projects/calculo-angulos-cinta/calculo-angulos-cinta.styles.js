import styled, { css } from "styled-components";

const commonStyles = css`
  width: calc(100vw / 6);
`;

export const AngulosContainer = styled.div`
  overflow: hidden;
`;

export const CalcAngContainer = styled.div`
  display: grid;
  grid-template-areas:
    "delta point1 radio cuerda ang angDel"
    "delta point2 radio cuerda ang angDel";
  align-items: center;

  &:nth-child(even) {
    background-color: #555;
  }
`;

export const DeltaContainer = styled.div`
  grid-area: delta;
  ${commonStyles}
`;

export const Point1Container = styled.div`
  grid-area: point1;
  ${commonStyles}
`;

export const Point2Container = styled.div`
  grid-area: point2;
  ${commonStyles}
`;

export const RadioContainer = styled.div`
  grid-area: radio;
  ${commonStyles}
`;
export const CuerdaContainer = styled.div`
  grid-area: cuerda;
  ${commonStyles}
`;
export const AngContainer = styled.div`
  grid-area: ang;
  ${commonStyles}
`;
export const AngDelContainer = styled.div`
  grid-area: angDel;
  ${commonStyles}
`;
