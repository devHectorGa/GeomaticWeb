import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {
  ProjectDetailEditContainer,
  ProjectDetailContainer,
  TitleContainer,
  TitleEditContainer,
  DateContainer,
  CommissionTitle,
  CommissionContainer,
  CommissionName
} from "./project-view.styles";

import {
  changeTitle,
  changeCommission,
  changeAnnotator
} from "./project-view.helper";

import { selectProject } from "../../redux/projects/projects.selectors";
import { editProject } from "../../redux/projects/projects.actions";
import FormInput from "../form-input/form-input.component";

const ProjectDetails = ({ project, id, editProject }) => {
  const [show, setShow] = useState(false);

  let handleChangeTitle = event => editProject(changeTitle(project, event), id);

  let handleOnChangeCommission = event =>
    editProject(changeCommission(project, event), id);

  let handleOnChangeAnnotator = event =>
    editProject(changeAnnotator(project, event), id);

  if (!show) {
    return (
      <ProjectDetailEditContainer>
        <TitleContainer>Datos del Proyecto:</TitleContainer>
        <TitleEditContainer>
          <FormInput
            name="title"
            label="Titulo del Proyecto"
            value={project.title ? project.title : ""}
            handleChange={handleChangeTitle}
            required
          />
        </TitleEditContainer>
        <DateContainer>
          <FormInput
            name="date"
            label="Fecha de creación"
            value={
              project.date
                ? new Date(project.date).toISOString().split("T")[0]
                : ""
            }
            handleChange={handleChangeTitle}
            required
          />
        </DateContainer>

        <CommissionTitle>Comisión:</CommissionTitle>
        <CommissionContainer>
          <CommissionName>Topógrafo:</CommissionName>
          <FormInput
            name="name"
            label="Nombre del Topografo"
            value={
              project.commission.surveyor.name
                ? project.commission.surveyor.name
                : ""
            }
            handleChange={handleOnChangeCommission}
            required
          />
          <FormInput
            name="email"
            type="email"
            label="Correo del Topografo"
            value={project.commission.surveyor.email}
            handleChange={handleOnChangeCommission}
            required
          />
        </CommissionContainer>
        <CommissionContainer>
          <CommissionName>Anotador:</CommissionName>
          <FormInput
            name="name"
            label="Nombre del Anotador"
            value={project.commission.annotator.name}
            handleChange={handleOnChangeAnnotator}
            required
          />
          <FormInput
            name="email"
            label="Correo del Anotador"
            value={project.commission.annotator.email}
            handleChange={handleOnChangeAnnotator}
            required
          />
        </CommissionContainer>
        {/*project.commission.auxiliary.map() */}
      </ProjectDetailEditContainer>
    );
  } else {
    return (
      <ProjectDetailContainer>
        <h2>{project.title}</h2>
      </ProjectDetailContainer>
    );
  }
};

const mapStateToProps = (state, ownProps) => ({
  project: selectProject(ownProps.match.params.projectId)(state),
  id: parseInt(ownProps.match.params.projectId)
});

const mapDispatchToProps = dispatch => ({
  editProject: (project, id) => dispatch(editProject(project, id))
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ProjectDetails);
