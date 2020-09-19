import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./containers/navbar/index";
import { ThemeProvider } from "emotion-theming";

const Home = lazy(() => import("./containers/home/index"));
const About = lazy(() => import("./containers/about/index"));
const Skills = lazy(() => import("./containers/skills/index"));
const Projects = lazy(() => import("./containers/projects/index"));

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

const App = () => {
    return (
        <ThemeProvider theme={{ color: "white" }}>
            <Navbar />
            <Switch>
                <Route path="/about" component={AboutPage}></Route>
                <Route path="/skills" component={SkillsPage}></Route>
                <Route path="/projects" component={ProjectsPage}></Route>
                <Route path="/" component={HomePage}></Route>
            </Switch>
        </ThemeProvider>
    );
};

export default App;
