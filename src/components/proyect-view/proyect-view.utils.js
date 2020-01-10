import { ProyectTypes } from "../../redux/proyects/proyects.types";

export const typeOfProyect = proyect => {
  let Component = undefined;
  if (proyect.type) {
    switch (proyect.type) {
      case ProyectTypes.MEDICION_DE_DISTANCIAS_CINTA:
        break;

      default:
        break;
    }
  }
};
