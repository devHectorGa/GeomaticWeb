import ProjectsActionTypes from "./projects.types";
const INITIAL_STATE = [];

const projectsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProjectsActionTypes.ADD_PROJECT:
      return [...state, action.payload];
    case ProjectsActionTypes.EDIT_PROJECT:
      return state.map((project, i) =>
        i === action.payload.id ? action.payload.project : project
      );
    case ProjectsActionTypes.DELETE_PROJECT:
      return state.filter((_, index) => index !== action.payload);
    case ProjectsActionTypes.SET_PROJECT_FROM_FIREBASE:
      return action.payload;
    case ProjectsActionTypes.CLEAR_PROJECT:
      return [];
    default:
      return state;
  }
};

export default projectsReducer;
