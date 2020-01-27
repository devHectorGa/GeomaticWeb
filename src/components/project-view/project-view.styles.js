import styled from "styled-components";
import ProjectTemplate from "./project-view.template";

export const ProjectContainer = styled(ProjectTemplate)``;

export const ProjectDetailEditContainer = styled.div`
  display: grid;
  grid-gap: 0.5rem;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(6, 1fr);
  padding: 1rem 2rem;
`;

export const ProjectDetailContainer = styled.div`
  padding: 1rem 2rem;
`;

export const TitleContainer = styled.h2`
  grid-column: span 6;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const TitleEditContainer = styled.h3`
  grid-column: span 3;
`;

export const PlaceContainer = styled.div`
  grid-column: span 3;
  margin: 0;
`;

export const CommissionTitle = styled.h3`
  grid-column: span 6;
  margin: 0;
`;

export const CommissionContainer = styled.div`
  grid-column: span 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const CommissionName = styled.p`
  grid-column: span 2;
  text-align: left;
  margin: 0;
`;

export const DeleteLabel = styled.p`
  font-size: 1.5rem;
  grid-column: span 2;
`;
