import React, { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Navbar from "./containers/navbar/index";
import { ThemeProvider } from "emotion-theming";

const Home = lazy(() => import("./containers/home/index"));

const HomePage = () => (
    <Suspense fallback={<h1>Loading...</h1>}>
        <Home />
    </Suspense>
);

const App = () => {
    return (
        <ThemeProvider theme={{ color: "white" }}>
            <Navbar />
            <Route path="/">
                <HomePage />
            </Route>
        </ThemeProvider>
    );
};

export default App;
