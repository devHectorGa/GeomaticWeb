import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

import { ProyectTypes } from "../../redux/proyects/proyects.types";
import {
  selectProyect,
  proyectsCount
} from "../../redux/proyects/proyects.selectors";
import { ProyectContainer } from "./proyect-view.styles";

const ProyectView = ({
  id,
  proyect,
  exists,
  history,
  match,
  ...otherProps
}) => {
  // const handleChange = event => {
  //   const { value, name } = event.target;
  //   console.log(name, value);
  //   if (name === "date") {
  //     console.log(new Date(value));
  //   }
  //   // this.setState({ [name]: value });
  // };
  if (!exists) {
    history.push("/proyectos");
  }

  switch (proyect.type) {
    case ProyectTypes.MEDICION_DE_DISTANCIAS_CINTA:
      console.log(ProyectTypes.MEDICION_DE_DISTANCIAS_CINTA);
      break;
    default:
      break;
  }

  return (
    <ProyectContainer>
      <p>Proyecto</p>
      {/* <Component proyect={proyect} {...otherProps}></Component> */}
    </ProyectContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  proyect: selectProyect(ownProps.match.params.proyectId)(state),
  exists: proyectsCount() >= parseInt(ownProps.match.params.proyectId),
  id: parseInt(ownProps.match.params.proyectId)
});

export default compose(connect(mapStateToProps), withRouter)(ProyectView);
