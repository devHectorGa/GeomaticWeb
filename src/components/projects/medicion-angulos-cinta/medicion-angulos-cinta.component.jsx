import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

import { selectProject } from "../../../redux/projects/projects.selectors";
import { editProject } from "../../../redux/projects/projects.actions";

import { AngulosContainer, Title } from "./medicion-angulos-cinta.styles";
import { isAngulosEmpty } from "./medicion-angulos-cinta.helper";

import CalculoAngulosCinta from "../calculo-angulos-cinta/calculo-angulos-cinta.component";

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

  return (
    <AngulosContainer>
      <Title>Angulos con cinta</Title>
      <CalculoAngulosCinta
        angulos={angulos}
        handleOnChangeAngulos={handleOnChangeAngulos}
      />
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
