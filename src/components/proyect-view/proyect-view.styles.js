import styled from "styled-components";
import ProyectTemplate from "./proyect-view.template";
import FormInput from "../form-input/form-input.component";

export const ProyectContainer = styled(ProyectTemplate)``;

export const ProyectDetailContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const TitleContainer = styled(FormInput)``;
