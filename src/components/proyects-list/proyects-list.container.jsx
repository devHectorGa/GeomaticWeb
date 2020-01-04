import React from "react";
import { TableContainer } from "./proyects-list.styles";

const ProyectsListContainer = ({ children }) => (
  <div>
    <h2>Lista de proyectos</h2>
    <TableContainer>{children}</TableContainer>
  </div>
);

export default ProyectsListContainer;
