import React, { useEffect } from "react";
import SkillsComponent from "./../../components/skills/index";
import { Helmet } from "react-helmet";

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
    document.getElementById("scr").addEventListener("load", () => {
      console.log(window.TagCanvas);
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
  }, []);
  
  return (
    <div>
      <Helmet>
        <script
          id="scr"
          src="https://www.goat1000.com/tagcanvas.min.js"
          async={true}
          type="text/javascript"
        />
      </Helmet>
      <SkillsComponent handleAnimation={handleAnimation} />
    </div>
  );
};

export default SkillsContainer;
