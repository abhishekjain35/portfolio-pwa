import React, { useEffect } from "react";
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
  useEffect(() => {
    window.TagCanvas.Start("myCanvas", "tags", {
      textColour: "#08fdd8",
      outlineColour: "transparent",
      depth: 1,
      maxSpeed: 0.05,
      noSelect: true,
      decel: 0.99,
      initial: [0.2, -0.1],
    });
  });
  return (
    <>
      <SkillsComponent handleAnimation={handleAnimation} />
    </>
  );
};

export default SkillsContainer;
