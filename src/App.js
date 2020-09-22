import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

const Home = lazy(() => import("./pages/home"));
const About = lazy(() => import("./pages/about"));
const Skills = lazy(() => import("./pages/skills"));
const Projects = lazy(() => import("./pages/projects"));
const NotFound = lazy(() => import("./pages/not-found"));

const HomePage = () => (
    <Suspense fallback={<h1>Loading...</h1>}>
        <Home />
    </Suspense>
);

const AboutPage = () => (
    <Suspense fallback={<h1>Loading...</h1>}>
        <About />
    </Suspense>
);

const SkillsPage = () => (
    <Suspense fallback={<h1>Loading...</h1>}>
        <Skills />
    </Suspense>
);

const ProjectsPage = () => (
    <Suspense fallback={<h1>Loading...</h1>}>
        <Projects />
    </Suspense>
);

const NotFoundPage = () => (
    <Suspense fallback={<h1>Loading...</h1>}>
        <NotFound />
    </Suspense>
);

const App = () => {
    return (
        <Switch>
            <Route exact path="/about" component={AboutPage}></Route>
            <Route exact path="/skills" component={SkillsPage}></Route>
            <Route exact path="/projects" component={ProjectsPage}></Route>
            <Route exact path="/" component={HomePage}></Route>
            <Route path="/not-found" component={NotFoundPage} />
            <Redirect to="/not-found" />
        </Switch>
    );
};

export default App;
