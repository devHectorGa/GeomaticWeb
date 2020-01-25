import { all, call } from "redux-saga/effects";
import { userSagas } from "./user/user.sagas";
import { projectsSaga } from "./projects/projects.sagas";

export default function* rootSaga() {
  yield all([call(userSagas), call(projectsSaga)]);
}
