import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import {
  ProjectDetailEditContainer,
  ProjectDetailContainer,
  TitleContainer,
  TitleEditContainer,
  PlaceContainer,
  CommissionTitle,
  CommissionContainer,
  CommissionName,
  DeleteLabel
} from "./project-view.styles";

import {
  changeTitle,
  changeCommission,
  changeAnnotator,
  changeAuxiliary
} from "./project-view.helper";

import { selectProject } from "../../redux/projects/projects.selectors";
import {
  editProject,
  deleteProject
} from "../../redux/projects/projects.actions";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const ProjectDetails = ({
  project,
  id,
  editProject,
  deleteProject,
  history
}) => {
  const [show, setShow] = useState(false);

  let handleChangeTitle = event => editProject(changeTitle(project, event), id);

  let handleOnChangeCommission = event =>
    editProject(changeCommission(project, event), id);

  let handleOnChangeAnnotator = event =>
    editProject(changeAnnotator(project, event), id);

  let handleOnChangeAuxiliary = (event, i) =>
    editProject(changeAuxiliary(project, event, i), id);

  let handleOnDeleteProject = async () => {
    deleteProject(id);
    history.push("/proyectos");
  };
  console.log(project.date);
  if (show) {
    return (
      <ProjectDetailEditContainer>
        <TitleContainer>
          {`${project.title}`}
          <CustomButton onClick={() => setShow(!show)}>
            Ocultar Detalles
          </CustomButton>
        </TitleContainer>

        <TitleEditContainer>
          <FormInput
            name="title"
            label="Titulo del Proyecto"
            value={project.title ? project.title : ""}
            handleChange={handleChangeTitle}
            required
          />
        </TitleEditContainer>
        <PlaceContainer>
          <FormInput
            name="place"
            label="Ubicación del proyecto."
            value={project.place ? project.place : ""}
            handleChange={handleChangeTitle}
            required
          />
        </PlaceContainer>

        <CommissionTitle>Comisión:</CommissionTitle>
        <CommissionContainer>
          <CommissionName>{`Topógrafo: ${project.commission.surveyor.name}`}</CommissionName>
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
          <CommissionName>{`Anotador: ${project.commission.annotator.name}`}</CommissionName>
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
        <CommissionTitle>Auxiliares:</CommissionTitle>
        {project.commission.auxiliary.map((auxiliary, i) => (
          <CommissionContainer key={i}>
            <CommissionName>{`Auxiliar: ${auxiliary.name}`}</CommissionName>
            <FormInput
              name="name"
              label="Nombre del Auxiliar"
              value={project.commission.auxiliary[i].name}
              handleChange={event => handleOnChangeAuxiliary(event, i)}
              required
            />
            <FormInput
              name="email"
              label="Correo del Auxiliar"
              value={project.commission.auxiliary[i].email}
              handleChange={event => handleOnChangeAuxiliary(event, i)}
              required
            />
          </CommissionContainer>
        ))}
        <DeleteLabel>Eliminar Proyecto:</DeleteLabel>
        <CustomButton isDanger onClick={() => handleOnDeleteProject(id)}>
          Eliminar
        </CustomButton>
      </ProjectDetailEditContainer>
    );
  } else {
    return (
      <ProjectDetailContainer>
        <TitleContainer>
          {project.title + " "}
          <CustomButton onClick={() => setShow(!show)}>
            Editar Detalles
          </CustomButton>
        </TitleContainer>
      </ProjectDetailContainer>
    );
  }
};

const mapStateToProps = (state, ownProps) => ({
  project: selectProject(ownProps.match.params.projectId)(state),
  id: parseInt(ownProps.match.params.projectId)
});

const mapDispatchToProps = dispatch => ({
  editProject: (project, id) => dispatch(editProject(project, id)),
  deleteProject: id => dispatch(deleteProject(id))
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(ProjectDetails);
