import React, { Suspense, lazy } from "react";
import "./App.css";

const Home = lazy(() => import("./components/home/index"));
const HomePage = () => (
    <Suspense fallback={<h1>Loading...</h1>}>
        <Home />
    </Suspense>
);

const App = () => {
    return <HomePage />;
};

export default App;
