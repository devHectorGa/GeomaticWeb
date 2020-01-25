import React from 'react'

import MedicionDistanciasCinta from '../../components/medicionDistanciasCintas/medicionDistanciasCinta.component'
import tipoNumeroMostrar from '../../components/helpers/tipo-numero-mostrar'

class LevantamientoCinta extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      mediciones: [
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
          p: 0,
        }  
      ]
    }
  }

  render(){
    return(
      <div>
        <h1>Levantamiento con Cinta</h1>
          <ul>
          {
            this.state.mediciones.map( medicion => (
              <li>{`${medicion.de}-${medicion.a}: ${tipoNumeroMostrar(medicion.media)}`}</li>
            ))
          }
          </ul>
        </div>
        )
      }
    }
    
    // <MedicionDistanciasCinta />
export default LevantamientoCinta