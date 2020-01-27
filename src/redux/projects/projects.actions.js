import ProjectsActionTypes from "./projects.types";

export const addProject = project => ({
  type: ProjectsActionTypes.ADD_PROJECT,
  payload: project
});

export const editProject = (project, id) => ({
  type: ProjectsActionTypes.EDIT_PROJECT,
  payload: { project, id }
});

export const deleteProject = id => ({
  type: ProjectsActionTypes.DELETE_PROJECT,
  payload: id
});
