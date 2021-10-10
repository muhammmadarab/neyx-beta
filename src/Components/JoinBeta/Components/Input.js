import React from "react";
import { Input, Label } from "./Input.style";

function InputCompo(props) {
  return (
    <div>
      <Label>{props.label}</Label>
      <Input
        type={props.type}
        placeholder={props.placeholder}
        id={props.name}
        name={props.name}
        value={props.value}
        autoComplete="off"
        required
      />
    </div>
  );
}

export default InputCompo;
