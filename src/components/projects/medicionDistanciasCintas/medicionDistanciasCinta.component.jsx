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
import { isDistanciaEmpty } from "./medicionDistanciasCintas.helper";

import CalculoDistanciasPrecisiones from "../calculo-distancias-precisiones/calculo-distancias-precisiones.component";

const MedicionDistanciasCinta = ({ project, id, editProject }) => {
  let {
    data: { distancia, ...otherData },
    ...otherProject
  } = project;

  distancia = distancia ? distancia : isDistanciaEmpty();

  const handleOnChangeDist = newDistancia => {
    let newProject = {
      data: { distancia: newDistancia, ...otherData },
      ...otherProject
    };
    editProject(newProject, id);
  };

  return (
    <MedicionContainer>
      <Title>Medición con cinta</Title>
      <CalculoDistanciasPrecisiones
        distancia={distancia}
        handleOnChangeDist={handleOnChangeDist}
      />
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
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(MedicionDistanciasCinta);
