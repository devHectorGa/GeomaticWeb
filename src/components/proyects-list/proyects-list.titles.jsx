import React from "react";
import { TableTitle, TableColumn } from "./proyects-list.styles";

const titles = ["Nombre", "Lugar", "Fecha"];

const ProyectsListTitles = () => (
  <TableColumn>
    {titles.map((name, id) => (
      <TableTitle key={id}>{name}</TableTitle>
    ))}
  </TableColumn>
);

export default ProyectsListTitles;
