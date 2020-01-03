import React from "react";

const ProyectView = ({ proyect }) => {
  console.log(proyect);
  return (
    <p>
      {proyect.title} <button>EDITAR</button>
    </p>
  );
};

export default ProyectView;
