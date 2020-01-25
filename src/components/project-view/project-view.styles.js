import styled from "styled-components";
import ProjectTemplate from "./project-view.template";
import FormInput from "../form-input/form-input.component";

export const ProjectContainer = styled(ProjectTemplate)``;

export const ProjectDetailContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const TitleContainer = styled(FormInput)``;
