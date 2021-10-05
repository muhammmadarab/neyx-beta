import React from "react";
import { AboutFooter } from "../About.style";
import { Link } from "react-router-dom";

function AboutFooters() {
  return (
    <AboutFooter>
      <div>
        <h1>Hire bargainator and start growing with ease!</h1>
        <h5>
          The intelligent sales assistant chatbot of the future. Using state of
          the art AI technology, Bargainator will begin generating extra revenue
          in minutes. Simply enable our pre-built interaction tools and campaign
          template and away you go!
        </h5>
        <Link to="/contact">Get in touch</Link>
      </div>
    </AboutFooter>
  );
}

export default AboutFooters;
