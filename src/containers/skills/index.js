import React from "react";
import SkillsComponent from "./../../components/skills/index";

const SkillsContainer = () => {
    const handleAnimation = (e) => {
        let letter = e.target;
        if (letter.classList[1] === "blast") return;
        letter.classList.add("blast");
        setTimeout(() => {
            letter.classList.remove("blast");
        }, 1000);
    };
    return <SkillsComponent handleAnimation={handleAnimation} />;
};

export default SkillsContainer;
