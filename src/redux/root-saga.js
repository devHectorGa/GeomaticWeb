import { all, call } from "redux-saga/effects";
import { userSagas } from "./user/user.sagas";
import { projectSagas } from "./projects/projects.sagas";

export default function* rootSaga() {
  yield all([call(userSagas), call(projectSagas)]);
}
