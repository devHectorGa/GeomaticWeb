import React from "react";
import { TableTitle, TableColumn } from "./projects-list.styles";

const titles = ["Nombre", "Lugar"];

const ProjectsListTitles = () => (
  <TableColumn>
    {titles.map((name, id) => (
      <TableTitle key={id}>{name}</TableTitle>
    ))}
  </TableColumn>
);

export default ProjectsListTitles;
