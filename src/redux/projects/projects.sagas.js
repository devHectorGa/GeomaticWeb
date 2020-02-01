import { all, call, takeLatest, put, select } from "redux-saga/effects";

import { getUserProjectRef } from "../../firebase/firebase.utils";
import UserActionTypes from "../user/user.types";
import { selectCurrentUser } from "../user/user.selectors";
import { clearProject, setProjectFromFirebase } from "./projects.actions";
import { selectProjects } from "./projects.selectors";
import ProjectsActionTypes from "./projects.types";

export function* clearProjectOnSignOut() {
  yield put(clearProject());
}

export function* updateProjectInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const projectRef = yield getUserProjectRef(currentUser.id);
      const projects = yield select(selectProjects);
      yield projectRef.update({ projects });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* checkProjectFromFirebase({ payload: user }) {
  const projectRef = yield getUserProjectRef(user.id);
  const projectSnapshot = yield projectRef.get();
  yield put(setProjectFromFirebase(projectSnapshot.data().projects));
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearProjectOnSignOut);
}

export function* onUserSignIn() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS, checkProjectFromFirebase);
}

export function* onProjectChange() {
  yield takeLatest(
    [
      ProjectsActionTypes.ADD_PROJECT,
      ProjectsActionTypes.DELETE_PROJECT,
      ProjectsActionTypes.EDIT_PROJECT,
      ProjectsActionTypes.CLEAR_PROJECT
    ],
    updateProjectInFirebase
  );
}

export function* projectSagas() {
  yield all([
    call(onSignOutSuccess),
    call(onProjectChange),
    call(onUserSignIn)
  ]);
}
