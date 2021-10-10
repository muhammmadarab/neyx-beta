import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import HomeHeader from "../../../img/HomeHeader.jpg";
import Typewriter from "typewriter-effect";

function Header() {
  return (
    <div className="hero__container">
      <div className="hero__text">
        <h1>
          When it comes to <span>trading</span> meet NeyX the
          <span>
            <Typewriter
              options={{
                strings: ["only solution.", "welcomes you.", "last message."],
                autoStart: true,
                loop: true,
                delay: 100,
              }}
            />
          </span>
        </h1>
        <p>Boost in sales &amp; Happy customer is our responsibility</p>
        <div className="hero__button">
          <Link to="/joinbeta" className="hero__joinUs">
            <div class="blob white"></div>
            Join Beta
          </Link>
          <Link to="/about" className="hero__viewMore">
            View More
          </Link>
        </div>
      </div>
      <div className="hero__image">
        <img src={HomeHeader} alt="business meeting" />
      </div>
    </div>
  );
}

export default Header;
