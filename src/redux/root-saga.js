import { all, call } from "redux-saga/effects";
import { userSagas } from "./user/user.sagas";
import { proyectsSaga } from "./proyects/proyects.sagas";

export default function* rootSaga() {
  yield all([call(userSagas), call(proyectsSaga)]);
}
