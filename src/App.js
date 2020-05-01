import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./containers/navbar/index";
import { ThemeProvider } from "emotion-theming";
// import AboutPage from "./containers/about/index";

const Home = lazy(() => import("./containers/home/index"));
const About = lazy(() => import("./containers/about/index"));

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

const App = () => {
    return (
        <ThemeProvider theme={{ color: "white" }}>
            <Navbar />
            <Switch>
                <Route path="/about">
                    <AboutPage />
                </Route>
                <Route path="/">
                    <HomePage />
                </Route>
            </Switch>
        </ThemeProvider>
    );
};

export default App;
