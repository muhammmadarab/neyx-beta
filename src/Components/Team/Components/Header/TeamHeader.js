import React from "react";
import "./TeamHeader.css";

function TeamHeader(props) {
  return (
    <div className="team__banner" id={props.id}>
      <div className="banner__left">
        <img src={props.image} alt={props.title}/>
      </div>
      <div className="banner__right">
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      </div>
    </div>
  );
}

export default TeamHeader;
