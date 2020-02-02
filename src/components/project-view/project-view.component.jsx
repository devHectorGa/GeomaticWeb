import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
// import { createStructuredSelector } from "reselect";

import { ProjectTypes } from "../../redux/projects/projects.types";
import {
  selectProject,
  projectsCount
} from "../../redux/projects/projects.selectors";

import EditProjectType from "../projects/edit-project-type/edit-project-type.component";
import MedicionDistanciasCinta from "../projects/medicionDistanciasCintas/medicionDistanciasCinta.component";
import MedicionAngulosCinta from "../projects/medicion-angulos-cinta/medicion-angulos-cinta.component.jsx";
import { ProjectContainer } from "./project-view.styles";

const ProjectView = ({ project, exist, history }) => {
  let Component = null;
  if (exist) {
    switch (project.type) {
      case ProjectTypes.MEDICION_DE_DISTANCIAS_CINTA:
        Component = MedicionDistanciasCinta;
        break;
      case ProjectTypes.MEDICION_DE_ANGULOS_CON_CINTA:
        Component = MedicionAngulosCinta;
        break;
      default:
        Component = EditProjectType;
        break;
    }
  }
  if (exist) {
    return (
      <ProjectContainer>
        <Component />
      </ProjectContainer>
    );
  } else {
    return <p>No existe</p>;
  }
};

const mapStateToProps = (state, ownProps) => ({
  project: selectProject(ownProps.match.params.projectId)(state),
  exist: projectsCount(state).length > ownProps.match.params.projectId
});

export default compose(connect(mapStateToProps), withRouter)(ProjectView);
