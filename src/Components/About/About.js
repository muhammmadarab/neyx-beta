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
        desc="NeyX will simplify the pricing system and help you grow your business. Let the magic begin for you!"
      />
      <Features />
      <AboutFeature
        classes="tools"
        heading="ESCALATE TO EXTREME NEYX"
        desc="We work for both buyer and seller. The emptor gets a fulfilling customer experience while for the merchant it's all about how to escalate your business to heights"
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
