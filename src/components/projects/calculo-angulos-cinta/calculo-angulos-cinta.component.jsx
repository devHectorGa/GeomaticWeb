import React from "react";

import {
  AngulosContainer,
  CalcAngContainer,
  DeltaContainer,
  Point1Container,
  Point2Container,
  RadioContainer,
  CuerdaContainer,
  AngContainer,
  AngCorContainer
} from "./calculo-angulos-cinta.styles";
import { changeValues } from "./calculo-angulos-cinta.helper";
import { decToDeg, medicionAngulos } from "../../helpers/angulosCinta";

import FormInput from "../../form-input/form-input.component";

const CalculoAngulosCinta = ({ idx, angulos, handleOnChangeAngulos }) => {
  let { angulo } = angulos;

  const handleOnChangeValues = async (index, event) => {
    let newAngulo = await medicionAngulos(changeValues(angulo, event, index));
    handleOnChangeAngulos({ angulo: newAngulo });
  };

  return (
    <AngulosContainer>
      {angulo.map(
        (
          { radio, cuerda, point, points, anguloMedido, anguloCorregido },
          index
        ) => (
          <CalcAngContainer key={index}>
            <DeltaContainer>
              <FormInput
                name="point"
                label="Delta"
                value={point ? point : ""}
                onChange={e => handleOnChangeValues(index, e)}
              />
            </DeltaContainer>
            <Point1Container>
              <FormInput
                name="point0"
                label="Punto"
                value={points[0] ? points[0] : ""}
                onChange={e => handleOnChangeValues(index, e)}
              />
            </Point1Container>
            <Point2Container>
              <FormInput
                name="point1"
                label="Punto"
                value={points[1] ? points[1] : ""}
                onChange={e => handleOnChangeValues(index, e)}
              />
            </Point2Container>
            <RadioContainer>
              <FormInput
                name="radio"
                label="Radio"
                value={radio ? radio : ""}
                onChange={e => handleOnChangeValues(index, e)}
              />
            </RadioContainer>
            <CuerdaContainer>
              <FormInput
                name="cuerda"
                label="Cuerda"
                value={cuerda ? cuerda : ""}
                onChange={e => handleOnChangeValues(index, e)}
              />
            </CuerdaContainer>
            <AngContainer>
              <p>{decToDeg(anguloMedido)}</p>
            </AngContainer>
            <AngCorContainer>
              <p>{decToDeg(anguloCorregido)}</p>
            </AngCorContainer>
          </CalcAngContainer>
        )
      )}
    </AngulosContainer>
  );
};

export default CalculoAngulosCinta;
