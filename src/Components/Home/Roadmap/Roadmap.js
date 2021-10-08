import React from "react";
import "./Roadmap.css";
import RoadmapImg from "../../../img/Roadmap.png";

function Roadmap() {
  return (
    <div className="roadmap">
      <h1 className="roadmap__title">
        NeyX <span>Roadmap</span>
      </h1>
      <h3>Our vision speaks louder than anything</h3>
      <img className="roadmap__img" src={RoadmapImg} alt="roadmap png" />
    </div>
  );
}

export default Roadmap;
