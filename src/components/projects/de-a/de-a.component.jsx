import React from "react";
import FormInput from "../../form-input/form-input.component";

import { DeAContainer, DeAElement } from "./de-a.style";

const DeA = ({ de, a, handleOnChangeText }) => (
  <DeAContainer>
    <DeAElement>
      <h3>De:</h3>
      <FormInput
        name="de"
        type="text"
        value={de}
        required
        onChange={e => handleOnChangeText(e)}
      />
    </DeAElement>
    <DeAElement>
      <h3>A:</h3>
      <FormInput
        name="a"
        type="text"
        value={a}
        required
        onChange={e => handleOnChangeText(e)}
      />
    </DeAElement>
  </DeAContainer>
);

export default DeA;
