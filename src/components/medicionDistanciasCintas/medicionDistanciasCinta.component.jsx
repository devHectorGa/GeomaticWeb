import React from 'react'

import CalculoDistanciasPrecisiones from '../calculo-distancias-precisiones/calculo-distancias-precisiones.component'

class MedicionDistanciasCinta extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      distancias: [
        {
          de: 'd1',
          a: 'd2',
          lecturas: [
            {
              x: '67.619',
            }
          ],
          media: 0,
          ro: 0,
          dist: 0,
          p: 0,
        }  
      ]
    }
  }
  handleOnChangeDist = (distancia, idx)=>{
    let newDistancias = this.state.distancias.slice()
    newDistancias[idx] = distancia
    this.setState({distancias: newDistancias})
  }  
  render(){
    return(
      <div>
        <div>
          <h2>Medicion con Cinta</h2>
          {
            this.state.distancias.map((distancia,idx) => (
              <CalculoDistanciasPrecisiones key={idx} idx={idx} distancia={distancia} handleOnChangeDist={this.handleOnChangeDist} />
            ))
          }
        </div>
      </div>
    )
  }
}

export default MedicionDistanciasCinta