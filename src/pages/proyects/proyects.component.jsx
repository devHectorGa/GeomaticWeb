import React from "react";

import { data } from "./proyects.data";

import ProyectsList from "../../components/proyects-list/proyects-list.component.jsx";

const Proyects = () => (
  <div>
    <h1>Proyectos</h1>
    <ProyectsList proyects={data} />
  </div>
);

export default Proyects;
