import React from "react";
import { Link } from "react-router-dom";
import "./IAmNeyx.css";

function IAmNeyx() {
  return (
    <div className="neyx__container">
      <div className="neyx__container--left">
        <img
          src="https://servixer.com/wp-content/uploads/2020/07/Email-marketing-strategy-05-700x544-1.png"
          alt="product"
        />
      </div>
      <div className="neyx__container--right">
        <h1>
          Hi, I'm NeyX,
          <span>a Smart intelligent Bargaining bot</span>
        </h1>
        <p>
          From interacting with your customers in real time to bargain with them
          and from making your regular sales to an increased number of sales, I
          am your go-to guy.
        </p>
        <Link to="/about" className="neyx__button">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default IAmNeyx;
