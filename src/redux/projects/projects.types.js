const ProjectsActionTypes = {
  ADD_PROJECT: "ADD_PROJECT",
  DELETE_PROJECT: "DELETE_PROJECT",
  EDIT_PROJECT: "EDIT_PROJECT",
  CLEAR_PROJECT: "CLEAR_PROJECT",
  SET_PROJECT_FROM_FIREBASE: "SET_PROJECT_FROM_FIREBASE",
  UPDATE_PROJECT_IN_FIREBASE: "UPDATE_PROJECT_IN_FIREBASE"
};

export default ProjectsActionTypes;

export const ProjectTypes = {
  MEDICION_DE_DISTANCIAS_CINTA: "MEDICION_DE_DISTANCIAS_CINTA",
  MEDICION_DE_ANGULOS_CON_CINTA: "MEDICION_DE_ANGULOS_CON_CINTA",
  // LEVANTAMIENTO_PLANIMETRICO_CON_CINTA: "LEVANTAMIENTO_PLANIMETRICO_CON_CINTA",
  PROYECTO_DESCONOCIDO: "PROYECTO_DESCONOCIDO"
};
