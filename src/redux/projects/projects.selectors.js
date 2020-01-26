import { createSelector } from "reselect";

export const selectProjects = state => state.projects;

export const selectProject = projectUrlParam =>
  createSelector([selectProjects], projects =>
    projects ? projects[projectUrlParam] : null
  );

export const projectsCount = selectProjects;
