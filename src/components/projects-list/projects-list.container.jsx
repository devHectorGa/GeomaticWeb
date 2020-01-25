import React from "react";
import { TableContainer } from "./projects-list.styles";

const ProjectsListContainer = ({ children }) => (
  <div>
    <h2>Lista de proyectos</h2>
    <TableContainer>{children}</TableContainer>
  </div>
);

export default ProjectsListContainer;
