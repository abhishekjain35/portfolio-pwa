import React from "react";
import AboutComponent from "./../../components/about/index";

const AboutContainer = () => {
  const handleAnimation = (e) => {
    let letter = e.target;
    if (letter.classList[1] === "blast") return;
    if (letter.tagName === "SPAN" && !(letter.textContent === " ")) {
      letter.classList.add("blast");
      setTimeout(() => {
        letter.classList.remove("blast");
      }, 1000);
    }
  };

  return <AboutComponent handleAnimation={handleAnimation} />;
};

export default AboutContainer;
