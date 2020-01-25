import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

import { ProjectTypes } from "../../redux/projects/projects.types";
import {
  selectProject,
  projectsCount
} from "../../redux/projects/projects.selectors";
import { ProjectContainer } from "./project-view.styles";

const ProjectView = ({
  id,
  project,
  exists,
  history,
  match,
  ...otherProps
}) => {
  // const handleChange = event => {
  //   const { value, name } = event.target;
  //   console.log(name, value);
  //   if (name === "date") {
  //     console.log(new Date(value));
  //   }
  //   // this.setState({ [name]: value });
  // };
  if (!exists) {
    history.push("/proyectos");
  }

  switch (project.type) {
    case ProjectTypes.MEDICION_DE_DISTANCIAS_CINTA:
      console.log(ProjectTypes.MEDICION_DE_DISTANCIAS_CINTA);
      break;
    default:
      break;
  }

  return (
    <ProjectContainer>
      <p>Proyecto</p>
      {/* <Component project={project} {...otherProps}></Component> */}
    </ProjectContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  project: selectProject(ownProps.match.params.projectId)(state),
  exists: projectsCount() >= parseInt(ownProps.match.params.projectId),
  id: parseInt(ownProps.match.params.projectId)
});

export default compose(connect(mapStateToProps), withRouter)(ProjectView);
