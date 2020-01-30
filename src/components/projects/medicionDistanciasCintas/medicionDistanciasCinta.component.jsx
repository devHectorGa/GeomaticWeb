import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

import { selectProject } from "../../../redux/projects/projects.selectors";
import { editProject } from "../../../redux/projects/projects.actions";
import CustomButton from "../../custom-button/custom-button.component";
import FormInput from "../../form-input/form-input.component";
import {
  MedicionContainer,
  Title,
  ValueContainer
} from "./medicionCinta.styles";

import tipoNumeroMostrar from "../../helpers/tipo-numero-mostrar";
import CalculoDistanciasPrecisiones from "../calculo-distancias-precisiones/calculo-distancias-precisiones.component";

const MedicionDistanciasCinta = ({ project, id }) => {
  let { data } = project;
  let distancia = data.distancia ? data.distancia : [{ lecturas: [{ x: 0 }] }];
  console.log(distancia);
  return (
    <MedicionContainer>
      <Title>Medición con cinta</Title>
      {distancia.map(({ lecturas }, idxLectura) => (
        <CalculoDistanciasPrecisiones  />
      ))}
      <CustomButton> + Lectura</CustomButton>
    </MedicionContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  project: selectProject(ownProps.match.params.projectId)(state),
  id: parseInt(ownProps.match.params.projectId)
});

const mapDispatchToProps = dispatch => ({
  editProject: (project, id) => dispatch(editProject(project, id))
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(MedicionDistanciasCinta);
