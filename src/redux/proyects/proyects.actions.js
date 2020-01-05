import ProyectsActionTypes from "./proyects.types";

export const addProyectStart = () => ({
  type: ProyectsActionTypes.ADD_PROYECT_START
});

export const addProyectComplete = proyect => ({
  type: ProyectsActionTypes.ADD_PROYECT_COMPLETE,
  payload: proyect
});
