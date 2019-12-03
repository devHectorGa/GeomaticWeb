import React from 'react'

import CalculoDistanciasPrecisiones from '../calculo-distancias-precisiones/calculo-distancias-precisiones.component'

class MedicionDistanciasCinta extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      distancia: props.distancia
    }
  }
  handleOnChangeDist = (distancia, idx)=>{
    let newDistancia = this.state.distancia.slice()
    newDistancia[idx] = distancia
    this.setState({distancia: newDistancia})
  }  
  render(){
    return(
      <div>
        <div>
          <h2>Medicion con Cinta</h2>
          {
            // this.state.distancia.map((lecturas,idx) => (
            //   <CalculoDistanciasPrecisiones key={idx} idx={idx} distancia={distancia} handleOnChangeDist={this.handleOnChangeDist} />
            // ))
          }
        </div>
      </div>
    )
  }
}

export default MedicionDistanciasCinta