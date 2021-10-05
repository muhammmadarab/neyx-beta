import React from "react";
import { Feature } from "./Features.style";

function FeatureCompo(props) {
  return (
    <Feature className={props.class}>
      <img src={props.icon} alt="Icon" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </Feature>
  );
}

export default FeatureCompo;
