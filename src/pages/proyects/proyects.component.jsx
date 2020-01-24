import React from "react";
import { Route } from "react-router-dom";
import { ProyectsContainer } from "./proyects.styles";

import ProyectsList from "../../components/proyects-list/proyects-list.component.jsx";
import ProyectView from "../../components/proyect-view/proyect-view.component";

const Proyects = ({ match }) => {
  return (
    <ProyectsContainer>
      <Route exact path={`${match.path}`} component={ProyectsList} />
      <Route path={`${match.path}/:proyectId`} component={ProyectView} />
    </ProyectsContainer>
  );
};

export default Proyects;
