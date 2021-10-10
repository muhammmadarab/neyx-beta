import React from "react";
import { InputsContainer, Textarea, Label } from "../Contact.style";

function TextareaComponent(props) {
  return (
    <InputsContainer id="textbox">
      <Textarea
        placeholder={props.placeholder}
        id={props.id}
        name={props.name}
        value={props.value}
        rows={props.rows}
        required
      />
      <Label for={props.for}>{props.label}</Label>
    </InputsContainer>
  );
}

export default TextareaComponent;
