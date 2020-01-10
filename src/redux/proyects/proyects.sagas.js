import { takeLatest, put, all, call } from "redux-saga/effects";
import ProyectsActionTypes from "./proyects.types";
import { addProyectComplete } from "./proyects.actions";

const proyectTemplate = {
  title: "Nuevo Proyecto",
  place: "",
  date: new Date(),
  type: "",
  commission: {
    surveyor: {},
    annotator: {},
    auxiliary: []
  },
  equipment: [""],
  data: {}
};

export function* addProyectStart() {
  const newProyect = proyectTemplate;
  yield put(addProyectComplete(newProyect));
}

export function* onAddProyect() {
  yield takeLatest(ProyectsActionTypes.ADD_PROYECT_START, addProyectStart);
}

export function* proyectsSaga() {
  yield all([call(onAddProyect)]);
}
