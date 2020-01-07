import React from "react";
import { TableColumn } from "./proyects-list.styles";
import { withRouter } from "react-router-dom";

const ProyectListPreview = ({ proyect, id, history, match }) => (
  <TableColumn onClick={() => history.push(`${match.path}/${id}`)}>
    <p>{proyect.title ? proyect.title : "Nuevo Proyecto"}</p>
    <p>{proyect.place ? proyect.place : ""}</p>
    <p>{new Date(proyect.date).toLocaleDateString()}</p>
  </TableColumn>
);

export default withRouter(ProyectListPreview);
