import React from "react";
import ProyectDetails from "./proyect-view.details";

const ProyectTemplate = ({ children }) => {
  return (
    <div>
      <ProyectDetails />
      <div>{children}</div>
    </div>
  );
};

export default ProyectTemplate;
