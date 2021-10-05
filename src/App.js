import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Navbar from "./Components/General/Navbar/Navbar";
import Footer from "./Components/General/Footer/Footer";
import Footer2 from "./Components/General/Footer/Footer2";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Beta from "./Components/JoinBeta/Beta";
import Team from "./Components/Team/Team";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/joinbeta">
            <Beta />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
        <Footer2 />
      </Router>
    </div>
  );
}

export default App;
