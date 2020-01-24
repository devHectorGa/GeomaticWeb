import React from 'react'

import tipoNumeroMostrar from '../helpers/tipo-numero-mostrar'

import DeA from '../de-a/de-a.component'

import medicionCinta from '../helpers/medicionCinta'

const CalculoDistanciasPrecisiones =  ({idx, distancia, handleOnChangeDist }) => {
  const handleOnChangeText = e => {
    let {name,value} = e.target
    distancia[name] = value    
    handleOnChangeDist(distancia, idx)
  }
  const handleOnChangeX = (index,value)=>{
    let isNumber = !isNaN(Number(value))
    let addLectura = value.charAt(value.length-1).toLowerCase() === 'a'

    if(isNumber){
      distancia.lecturas[index].x = value
    }else if(addLectura){
      let lectura = {x:0}
      distancia.lecturas.push(lectura)      
    }else{
      return null
    }    
    handleOnChangeLecturas(distancia.lecturas)
  }
  const handleOnChangeLecturas = lecturas => {
    distancia.lecturas=lecturas
    medicionCinta(distancia)
      .then(newDistancia =>
        handleOnChangeDist(newDistancia,idx)
      )
  }
  const handleOnDeleteLecture = pos =>{
    distancia.lecturas.splice(pos,1)
    handleOnChangeLecturas(distancia.lecturas)
  }

  return(
    <div>
      <DeA de={distancia.de} a={distancia.a} handleOnChangeText={handleOnChangeText} />
      <table>
        <thead>
          <tr>
            <th>Lectura (x)</th>
            <th>Error Residual (v)</th>
            <th>Error Residual al cuadrado (v^2)</th>
          </tr>
        </thead>
        <tbody>
          { distancia.lecturas.map(({x,v,v2}, index) => (
            <tr key={index} >
              <td><input name='x' type='number' value={x} onChange={(e)=>handleOnChangeX(index,e.target.value)}/></td>
              <td> { tipoNumeroMostrar(v) } </td>
              <td>{ tipoNumeroMostrar(v2) }</td>
            </tr>
          )) }
          {distancia.sum ?
            <tr>
              <td>Sumatoria:</td>            
              <td>{ distancia.sum.v ? tipoNumeroMostrar(distancia.sum.v) : null}</td>
              <td>{ distancia.sum.v2 ? tipoNumeroMostrar(distancia.sum.v2) : null}</td>
            </tr>
          :null}
        </tbody>
      </table>
      <table>
        <tbody>
            <tr>
              <td>Error:</td>
              <td>{ tipoNumeroMostrar(distancia.ro) }</td>
            </tr>
            <tr>
              <td>Distancia:</td>
              <td>{ `${tipoNumeroMostrar(distancia.media)}+-${tipoNumeroMostrar(distancia.ro)}` }</td>
            </tr>
            <tr>
              <td>Precisión:</td>
              <td>{ tipoNumeroMostrar(distancia.p) }</td>
            </tr>
        </tbody>
      </table>
      <span>Atajos de teclado: </span>
      <span>
        <ul>
          <li>a: agregar lectura</li>
          <li>d: eliminar lectura</li>
        </ul>
      </span>
    </div>
  )
}

export default CalculoDistanciasPrecisiones