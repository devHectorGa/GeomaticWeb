import { take, put, all, call } from "redux-saga/effects";
import ProjectsActionTypes, { ProjectTypes } from "./projects.types";
import { addProjectComplete } from "./projects.actions";

const dataCommission = { name: "", email: "" };

const projectTemplate = {
  title: "Nuevo Proyecto",
  place: "Desconocido",
  date: new Date(),
  type: ProjectTypes.PROYECTO_DESCONOCIDO,
  commission: {
    surveyor: dataCommission,
    annotator: dataCommission,
    auxiliary: [dataCommission]
  },
  equipment: [""],
  data: {}
};

export function* addProjectStart() {
  const newProject = projectTemplate;
  yield put(addProjectComplete(newProject));
}

export function* onAddProject() {
  yield take(ProjectsActionTypes.ADD_PROJECT, addProjectStart);
}

export function* projectsSaga() {
  yield all([call(onAddProject)]);
}
