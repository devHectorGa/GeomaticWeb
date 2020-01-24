import { takeLatest, put, all, call } from "redux-saga/effects";
import ProyectsActionTypes from "./proyects.types";
import { addProyectComplete } from "./proyects.actions";

const dataCommission = {name: "", email: ""}

const proyectTemplate = {
  title: "Nuevo Proyecto",
  place: "Desconocido",
  date: new Date(),
  type: "",
  commission: {
    surveyor: dataCommission,
    annotator: dataCommission,
    auxiliary: [dataCommission]
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
