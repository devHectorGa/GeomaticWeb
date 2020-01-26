import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

import { EditProjectTypeContainer, Select } from "./edit-project-type.style";
import { editProjectType } from "./edit-project.helpers";

import { selectProject } from "../../../redux/projects/projects.selectors";
import { ProjectTypes } from "../../../redux/projects/projects.types";
import { editProject } from "../../../redux/projects/projects.actions";

const EditProjectType = ({ project, id, editProject }) => (
  <EditProjectTypeContainer>
    <h2>Selecciona el tipo de proyecto a realizar.</h2>
    <Select
      name="type"
      onChange={event => editProject(editProjectType(project, event), id)}
    >
      <option>{project.type}</option>
      {Object.values(ProjectTypes).map((type, i) => (
        <option key={i}>{type.replace(/_/g, " ")}</option>
      ))}
      {console.log(Object.values(ProjectTypes))}
    </Select>
  </EditProjectTypeContainer>
);

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
)(EditProjectType);
