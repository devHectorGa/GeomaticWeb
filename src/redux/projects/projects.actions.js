import ProjectsActionTypes from "./projects.types";

export const addProjectStart = () => ({
  type: ProjectsActionTypes.ADD_PROJECT_START
});

export const addProjectComplete = project => ({
  type: ProjectsActionTypes.ADD_PROJECT_COMPLETE,
  payload: project
});
