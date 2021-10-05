import React from "react";
import { Feature, FeatureDesc, FeatureImg } from "../About.style";

function AboutFeature(props) {
  return (
    <Feature className={props.classes}>
      <FeatureDesc>
        <h2>{props.title}</h2>
        <h1 className={props.hOneClass}>{props.heading}</h1>
        <h4>{props.desc}</h4>
        <p>{props.footer}</p>
      </FeatureDesc>
      <FeatureImg>
        <img src={props.img} alt={props.alt} />
      </FeatureImg>
    </Feature>
  );
}

export default AboutFeature;
