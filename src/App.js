import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Fallback from "./components/reusable-components/fallback";
import "./App.css";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Skills = lazy(() => import("./pages/skills"));
const Projects = lazy(() => import("./pages/projects"));
const NotFound = lazy(() => import("./pages/not-found"));

const HomePage = () => (
  <Suspense fallback={<Fallback />}>
    <Home />
  </Suspense>
);

const AboutPage = () => (
  <Suspense fallback={<Fallback />}>
    <About />
  </Suspense>
);

const SkillsPage = () => (
  <Suspense fallback={<Fallback />}>
    <Skills />
  </Suspense>
);

const ProjectsPage = () => (
  <Suspense fallback={<Fallback />}>
    <Projects />
  </Suspense>
);

const NotFoundPage = () => (
  <Suspense fallback={<Fallback />}>
    <NotFound />
  </Suspense>
);

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/about" component={AboutPage}></Route>
        <Route exact path="/skills" component={SkillsPage}></Route>
        <Route exact path="/projects" component={ProjectsPage}></Route>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/not-found" component={NotFoundPage} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
};

export default App;
