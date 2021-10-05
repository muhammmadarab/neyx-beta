import React from "react";
import { AboutContainer } from "./About.style";
import Title from "../General/TitleHeader/Title";
import Features from "./Components/Features";
import AboutFeature from "./Components/AboutFeature";
import WaveSvg from "./Components/WaveSvg";
import NurtureLead from "./Components/NurtureLead";
import AboutFooter from "./Components/AboutFooter";

function About() {
  return (
    <AboutContainer>
      <Title
        title="About Us"
        desc="Bargainator offers a whole new shopping experience for your customers'
      while giving you the tools needed to grow your business. Hire Bagainator
      and let him do the work for you!"
      />
      <Features />
      <AboutFeature
        classes="tools"
        heading="Tools for Growth"
        desc="Bargainator offers shoppers a one-of-the-kind customer experience. For merchants, it's all about the tools to grow your business!"
        img="https://www.orangescrum.com/blog/wp-content/uploads/2019/02/What-Managers-searching-from-Project-Management-Tools.png"
        alt="Men having idea"
      />
      <WaveSvg />
      <NurtureLead />
      <AboutFooter />
    </AboutContainer>
  );
}

export default About;
