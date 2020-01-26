import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

import ProjectListPreview from "./projects-list.preview";
import ProjectsListContainer from "./projects-list.container";
import ProjectsListTitles from "./projects-list.titles";

import { selectProjects } from "../../redux/projects/projects.selectors.js";
import CustomButton from "../custom-button/custom-button.component";
import { addProject } from "../../redux/projects/projects.actions";
import { ProjectTypes } from "../../redux/projects/projects.types";

const ProjectsList = ({ projects, addProject, history, match }) => {
  let handleOnAddProject = async () => {
    addProject();
    history.push(`${match.path}/${projects.length}`);
  };
  return (
    <ProjectsListContainer>
      <ProjectsListTitles />
      {projects.map((project, key) => (
        <ProjectListPreview key={key} id={key} project={project} />
      ))}
      <CustomButton onClick={handleOnAddProject}>
        Agregar Proyecto +
      </CustomButton>
    </ProjectsListContainer>
  );
};

const mapStateToPros = createStructuredSelector({ projects: selectProjects });

const madDispatchToProps = dispatch => ({
  addProject: () => dispatch(addProject(projectTemplate))
});

const dataCommission = { name: "", email: "" };
const projectTemplate = {
  title: "",
  place: "",
  date: new Date(),
  type: ProjectTypes.PROYECTO_DESCONOCIDO,
  commission: {
    surveyor: dataCommission,
    annotator: dataCommission,
    auxiliary: [dataCommission, dataCommission]
  },
  equipment: [""],
  data: {}
};

export default compose(
  connect(mapStateToPros, madDispatchToProps),
  withRouter
)(ProjectsList);
