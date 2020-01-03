import React from "react";
import { Route } from "react-router-dom";

import ProyectsList from "../../components/proyects-list/proyects-list.component.jsx";

const Proyects = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={ProyectsList} />
    {/* <Route patch={`${match.path}/:proyectId`} Component={ProyectsList} /> */}
  </div>
);

export default Proyects;
