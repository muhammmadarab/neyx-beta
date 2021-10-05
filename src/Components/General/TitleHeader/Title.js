import React from "react";
import "./title.css";

function Title(props) {
  return (
    <div className="heading__container">
      <h1 className="heading">{props.title}</h1>
      <h3 className="title__desc">{props.desc}</h3>
    </div>
  );
}

export default Title;
