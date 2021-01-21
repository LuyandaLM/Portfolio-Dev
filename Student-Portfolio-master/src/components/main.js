import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landingpage";
import Testimonials from "./testimonials";
import ContactUs from "./contact";
import Projects from "./projects";
import Resume from "./resume";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/testimonials" component={Testimonials} />
    <Route path="/contact" component={ContactUs} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
  </Switch>
);

export default Main;
