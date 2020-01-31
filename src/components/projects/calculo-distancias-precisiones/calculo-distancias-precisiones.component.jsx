import React from "react";

import {
  CalculosContainer,
  CalculosAtajos
} from "./calculo-distancias-precisiones.style";

import tipoNumeroMostrar from "../../helpers/tipo-numero-mostrar";
import { changeValue } from "./calculo-distancias-precisiones.helper";

import medicionCinta from "../../helpers/medicionCinta";
import DeA from "../de-a/de-a.component";

const CalculoDistanciasPrecisiones = ({
  idx,
  distancia,
  handleOnChangeDist
}) => {
  const handleOnChangeText = e => {
    let newDistancia = changeValue(distancia, e);
    handleOnChangeDist(newDistancia);
  };
  const handleOnChangeX = (index, value) => {
    let isNumber = !isNaN(Number(value));
    let addLectura = value.charAt(value.length - 1).toLowerCase() === "a";
    let deleteLectura = value.charAt(value.length - 1).toLowerCase() === "d";

    if (isNumber) {
      distancia.lecturas[index].x = value;
    } else if (addLectura) {
      let lectura = { x: 0 };
      distancia.lecturas.push(lectura);
    } else if (deleteLectura) {
      if (distancia.lecturas.length > 1) {
        distancia.lecturas = distancia.lecturas.filter(
          (_, idx) => index !== idx
        );
      }
    } else {
      return null;
    }
    handleOnChangeLecturas(distancia.lecturas);
  };
  const handleOnChangeLecturas = lecturas => {
    distancia.lecturas = lecturas;
    medicionCinta(distancia).then(newDistancia =>
      handleOnChangeDist(newDistancia, idx)
    );
  };

  return (
    <CalculosContainer>
      <DeA
        de={distancia.de ? distancia.de : ""}
        a={distancia.a ? distancia.a : ""}
        handleOnChangeText={handleOnChangeText}
      />
      <table>
        <thead>
          <tr>
            <th>Lectura (x)</th>
            <th>Error Residual (v)</th>
            <th>Error Residual al cuadrado (v^2)</th>
          </tr>
        </thead>
        <tbody>
          {distancia.lecturas.map(({ x, v, v2 }, index) => (
            <tr key={index}>
              <td>
                <input
                  name="x"
                  value={x}
                  onChange={e => handleOnChangeX(index, e.target.value)}
                />
              </td>
              <td> {tipoNumeroMostrar(v)} </td>
              <td>{tipoNumeroMostrar(v2)}</td>
            </tr>
          ))}
          {distancia.sum ? (
            <tr>
              <td>Sumatoria:</td>
              <td>
                {distancia.sum.v ? tipoNumeroMostrar(distancia.sum.v) : null}
              </td>
              <td>
                {distancia.sum.v2 ? tipoNumeroMostrar(distancia.sum.v2) : null}
              </td>
            </tr>
          ) : null}
        </tbody>
      </table>
      <table>
        <tbody>
          <tr>
            <td>Error:</td>
            <td>{tipoNumeroMostrar(distancia.ro)}</td>
            <td>Distancia:</td>
            <td>{`${tipoNumeroMostrar(distancia.media)}+-${tipoNumeroMostrar(
              distancia.ro
            )}`}</td>
            <td>Precisión:</td>
            <td>{tipoNumeroMostrar(distancia.p)}</td>
          </tr>
        </tbody>
      </table>
      <CalculosAtajos>
        <span>Atajos de teclado: </span>
        <p>
          a:
          <small> agregar lectura</small>
        </p>
        <p>
          d:
          <small> eliminar lectura</small>
        </p>
      </CalculosAtajos>
    </CalculosContainer>
  );
};

export default CalculoDistanciasPrecisiones;
