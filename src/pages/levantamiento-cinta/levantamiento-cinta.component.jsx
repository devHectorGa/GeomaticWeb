import React from 'react'

import MedicionDistanciasCinta from '../../components/medicionDistanciasCintas/medicionDistanciasCinta.component'

class LevantamientoCinta extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mediciones: []
    }
  }

  render(){
    return(
      <div>
        <h1>Levantamiento con Cinta</h1>
        <MedicionDistanciasCinta />
      </div>
    )
  }
}

export default LevantamientoCinta