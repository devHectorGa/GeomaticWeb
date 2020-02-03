import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

import { selectProject } from "../../../redux/projects/projects.selectors";
import { editProject } from "../../../redux/projects/projects.actions";

import {
  AngulosContainer,
  Title,
  TitleContainer,
  ButtonContainer,
  AngleDataContainer,
  SumTeoData,
  SumObsData,
  ErrData,
  CorData
} from "./medicion-angulos-cinta.styles";
import { isAngulosEmpty, addAngulo } from "./medicion-angulos-cinta.helper";
import { calculosAngulos, decToDeg } from "../../helpers/angulosCinta";

import CalculoAngulosCinta from "../calculo-angulos-cinta/calculo-angulos-cinta.component";
import CustomButton from "../../custom-button/custom-button.component";

const MedicionAngulosCinta = ({ project, id, editProject }) => {
  const [show, setShow] = useState(false);
  let { data, ...otherProject } = project;
  let { angulos } = data;

  angulos = angulos ? angulos : isAngulosEmpty();

  const handleOnChangeAngulos = async newAngulo => {
    let newAngulos = await calculosAngulos(newAngulo);
    let newProject = {
      data: { ...data, angulos: newAngulos },
      ...otherProject
    };
    editProject(newProject, id);
  };

  const handleOnAddAngulos = () => {
    let newProject = {
      data: { ...data, angulos: addAngulo(angulos) },
      ...otherProject
    };
    editProject(newProject, id);
  };

  return (
    <AngulosContainer>
      <TitleContainer>
        <Title>{`Angulos con cinta`}</Title>
        <p>{`Tipo de medición: ${angulos.tipoMedicion}`}</p>
        <CustomButton onClick={() => setShow(!show)}>
          Editar Angulos
        </CustomButton>
      </TitleContainer>
      {show ? (
        <CalculoAngulosCinta
          angulos={angulos}
          handleOnChangeAngulos={handleOnChangeAngulos}
        />
      ) : null}
      {show ? (
        <ButtonContainer>
          <CustomButton onClick={() => handleOnAddAngulos()}>
            + Angulo
          </CustomButton>
        </ButtonContainer>
      ) : null}
      <AngleDataContainer>
        <SumTeoData>{`Sumatoria Teorica: ${decToDeg(
          angulos.sumatoriaTeorica
        )}`}</SumTeoData>
        <SumObsData>{`Sumatoria Observada: ${decToDeg(
          angulos.sumatoriaObservada
        )}`}</SumObsData>
        <ErrData>{`Error: ${decToDeg(angulos.error)}`}</ErrData>
        <CorData>{`Corrección: ${decToDeg(angulos.correccion)}`}</CorData>
      </AngleDataContainer>
    </AngulosContainer>
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
)(MedicionAngulosCinta);
