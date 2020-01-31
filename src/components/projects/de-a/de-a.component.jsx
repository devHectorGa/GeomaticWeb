import React from "react";
import FormInput from "../../form-input/form-input.component";

const DeA = ({ de, a, handleOnChangeText }) => (
  <table>
    <thead>
      <tr>
        <th>De</th>
        <td>
          <FormInput
            name="de"
            type="text"
            value={de}
            required
            onChange={e => handleOnChangeText(e)}
          />
        </td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>A</th>
        <td>
          <FormInput
            name="a"
            type="text"
            value={a}
            required
            onChange={e => handleOnChangeText(e)}
          />
        </td>
      </tr>
    </tbody>
  </table>
);

export default DeA;
