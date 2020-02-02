import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

import { selectProject } from "../../../redux/projects/projects.selectors";
import { editProject } from "../../../redux/projects/projects.actions";

import {
  AngulosContainer,
  Title,
  ButtonContainer
} from "./medicion-angulos-cinta.styles";
import { isAngulosEmpty, addAngulo } from "./medicion-angulos-cinta.helper";

import CalculoAngulosCinta from "../calculo-angulos-cinta/calculo-angulos-cinta.component";
import CustomButton from "../../custom-button/custom-button.component";

const MedicionAngulosCinta = ({ project, id, editProject }) => {
  let {
    data: { angulos, ...otherData },
    ...otherProject
  } = project;

  angulos = angulos ? angulos : isAngulosEmpty();

  const handleOnChangeAngulos = newAngulos => {
    let newProject = {
      data: { angulos: newAngulos, ...otherData },
      ...otherProject
    };
    editProject(newProject, id);
  };

  const handleOnAddAngulos = () => {
    let newProject = {
      data: { ...otherData, angulos: addAngulo(angulos) },
      ...otherProject
    };
    editProject(newProject, id);
  };

  return (
    <AngulosContainer>
      <Title>Angulos con cinta</Title>
      <CalculoAngulosCinta
        angulos={angulos}
        handleOnChangeAngulos={handleOnChangeAngulos}
      />
      <ButtonContainer>
        <CustomButton onClick={() => handleOnAddAngulos()}>
          + Angulo
        </CustomButton>
      </ButtonContainer>
    </AngulosContainer>
  );
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
)(MedicionAngulosCinta);
