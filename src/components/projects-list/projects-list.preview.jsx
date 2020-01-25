import React from "react";
import { TableColumn } from "./projects-list.styles";
import { withRouter } from "react-router-dom";

const ProjectListPreview = ({ project, id, history, match }) => (
  <TableColumn onClick={() => history.push(`${match.path}/${id}`)}>
    <p>{project.title ? project.title : "Nuevo Proyecto"}</p>
    <p>{project.place ? project.place : ""}</p>
    <p>{new Date(project.date).toLocaleDateString()}</p>
  </TableColumn>
);

export default withRouter(ProjectListPreview);
