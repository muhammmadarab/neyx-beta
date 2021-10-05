import React from "react";
import Header from "./Components/Header";
import Roadmap from "../Home/Roadmap/Roadmap";
import Solution from "../Home/Solution/Solution";
import Features from "../About/Components/Features";
import AboutFooter from "../About/Components/AboutFooter";

function Beta() {
  return (
    <>
      <Header />
      <Roadmap />
      <Solution />
      <Features />
      <AboutFooter />
    </>
  );
}

export default Beta;
