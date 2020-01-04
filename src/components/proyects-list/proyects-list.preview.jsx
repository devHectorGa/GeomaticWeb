import React from "react";
import { TableColumn } from "./proyects-list.styles";

const ProyectListPreview = ({ proyect }) => (
  <TableColumn>
    <p>{proyect.title}</p>
    <p>{proyect.place.slice(0, 25)}...</p>
    <p>{new Date(proyect.date).toLocaleDateString()}</p>
  </TableColumn>
);

export default ProyectListPreview;
