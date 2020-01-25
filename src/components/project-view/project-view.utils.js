import { ProjectTypes } from "../../redux/projects/projects.types";

export const typeOfProject = project => {
  let Component = undefined;
  if (project.type) {
    switch (project.type) {
      case ProjectTypes.MEDICION_DE_DISTANCIAS_CINTA:
        break;

      default:
        break;
    }
  }
};
