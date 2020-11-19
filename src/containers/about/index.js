import React from "react";
import AboutComponent from "./../../components/about/index";

const AboutContainer = () => {

    const handleAnimation = (e) => {
        console.log(e.target);
    }
    return <AboutComponent handleAnimation={handleAnimation} />;
};

export default AboutContainer;
