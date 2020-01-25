import ProjectsActionTypes from "./projects.types";
import { data } from "./projects.data";
// const INITIAL_STATE = data;
const INITIAL_STATE = [];

const projectsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProjectsActionTypes.ADD_PROJECT:
      return [...state, action.payload];
    case ProjectsActionTypes.DELETE_PROJECT:
      return state.splice(action.payload, 1);
    default:
      return state;
  }
};

export default projectsReducer;
