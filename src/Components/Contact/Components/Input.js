import React from "react";
import { Label, Input, InputsContainer } from "../Contact.style";

function InputCont(props) {
  return (
    <InputsContainer>
      <Input
        placeholder={props.placeholder}
        type={props.type}
        name={props.name}
        value={props.value}
        id={props.for}
        required
      />
      <Label for={props.for}>{props.label}</Label>
    </InputsContainer>
  );
}

export default InputCont;
