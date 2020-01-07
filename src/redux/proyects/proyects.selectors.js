import { createSelector } from "reselect";

export const selectProyects = state => state.proyects;

export const selectProyect = proyectUrlParam =>
  createSelector([selectProyects], proyects =>
    proyects ? proyects[proyectUrlParam] : null
  );
