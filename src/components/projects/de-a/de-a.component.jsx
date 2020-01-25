import React from 'react'

const DeA = ({de, a, handleOnChangeText})=>(
  <table>
    <thead>
      <tr>
        <th>De</th>
        <td><input name='de' type='text' value={de} required onChange={e=>handleOnChangeText(e)} /></td>
        </tr>
        </thead>
        <tbody>
        <tr>
        <th>A</th>
        <td><input name='a' type='text' value={a} required onChange={e=>handleOnChangeText(e)} /></td>
      </tr>
    </tbody>
  </table>
)

export default DeA