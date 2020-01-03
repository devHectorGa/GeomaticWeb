import React from "react";
import ProyectView from "../proyect-view/proyect-view.component";

const ProyectsList = ({ proyects }) => (
  <div>
    {proyects.map((proyect, key) => (
      <ProyectView key={key} proyect={proyect} />
    ))}
  </div>
);

export default ProyectsList;
