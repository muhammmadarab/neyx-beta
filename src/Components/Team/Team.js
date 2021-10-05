import React from "react";
import Header from "./Components/Header/TeamHeader";
import Intro from "./Components/TeamIntro/Intro";
import TeamMember from "./Components/Card/TeamMember";

function Team() {
  return (
    <>
      <Header
        image="https://moving2canada.com/wp-content/uploads/2019/12/HR_social.jpg"
        title="Our Mission"
        desc="As an ROI-focused inbound marketing agency, we help businesses grow
        through online education, training, collaboration, and execution. We
        experience success through the success of our clients."
      />
      <Intro />
      <TeamMember />
      <Header
        image="https://media.glassdoor.com/l/1469777/hr-team-group-fr-office.jpg"
        title="Our Culture"
        desc="We're a close-knit team of enthusiastic marketers, strategists,
        creators, and educators. Think you'll fit in just fine?"
        id="teamFooter"
      />
    </>
  );
}

export default Team;
