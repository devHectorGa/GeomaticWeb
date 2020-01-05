import React from "react";
import { TableColumn } from "./proyects-list.styles";

const ProyectListPreview = ({ proyect }) => (
  <TableColumn>
    <p>{proyect.title ? proyect.title : "Nuevo Proyecto"}</p>
    <p>{proyect.place ? proyect.place : ""}</p>
    <p>{new Date(proyect.date).toLocaleDateString()}</p>
  </TableColumn>
);

export default ProyectListPreview;
