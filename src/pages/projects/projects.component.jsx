import React from "react";
import { Route } from "react-router-dom";
import { ProjectsContainer } from "./projects.styles";

import ProjectsList from "../../components/projects-list/projects-list.component.jsx";
import ProjectView from "../../components/project-view/project-view.component";

const Projects = ({ match }) => {
  return (
    <ProjectsContainer>
      <Route exact path={`${match.path}`} component={ProjectsList} />
      <Route path={`${match.path}/:projectId`} component={ProjectView} />
    </ProjectsContainer>
  );
};

export default Projects;
