import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
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
            Join Beta
          </Link>
          <Link to="/about" className="hero__viewMore">
            View More
          </Link>
        </div>
      </div>
      <div className="hero__image">
        <img
          src="https://exeleonmagazine.com/wp-content/uploads/2020/02/isometric-business-people-meeting_23-2148289514.jpg"
          alt="business meeting"
        />
      </div>
    </div>
  );
}

export default Header;
