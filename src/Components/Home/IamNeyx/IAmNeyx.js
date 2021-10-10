import React from "react";
import { Link } from "react-router-dom";
import "./IAmNeyx.css";
import IAmNeyxImg from "../../../img/IAmNeyx.jpg";

function IAmNeyx() {
  return (
    <div className="neyx__container">
      <div className="neyx__container--left">
        <img src={IAmNeyxImg} alt="product" />
      </div>
      <div className="neyx__container--right">
        <h1>
          Hi, I'm NeyX,
          <span>a Smart intelligent Bargaining bot</span>
        </h1>
        <p>
          A skilled advanced bargaining bot that can be integrated in every
          e-commerce website and bring your customer the best deal possible. You
          set the price range, let the bot do the haggling and make your
          customer happiest.
        </p>
        <Link to="/about" className="neyx__button">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default IAmNeyx;
