import ProyetsActionTypes from "./proyects.types";
import { data } from "./proyects.data";
const INITIAL_STATE = data;
// const INITIAL_STATE = [];

const proyectsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProyetsActionTypes.ADD_PROYECT_COMPLETE:
      return [...state, action.payload];
    case ProyetsActionTypes.DELETE_PROYECT:
      return state.splice(action.payload, 1);
    default:
      return state;
  }
};

export default proyectsReducer;
