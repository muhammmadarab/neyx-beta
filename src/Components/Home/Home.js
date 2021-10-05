import React from "react";
import Header from "./Header/Header";
import IAmNiyx from "./IamNeyx/IAmNeyx";
import Solution from "./Solution/Solution";
import Roadmap from "./Roadmap/Roadmap";
import Reviews from "./Reviews/Reviews";
import Faq from "./Faq/Faq";

function Home() {
  return (
    <div>
      <Header />
      <IAmNiyx />
      <Solution />
      <Roadmap />
      <Reviews />
      <Faq />
    </div>
  );
}

export default Home;
