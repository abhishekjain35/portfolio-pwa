import React from "react";
import { HomeContainer, BottomTags, UpperTags } from "./style/style";
import SkillsBar from "./SkillBar";

const SkillsComponent = ({ handleAnimation }) => {
  return (
    <HomeContainer>
      <UpperTags>
        &lt;html&gt; <br /> &nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;
      </UpperTags>
      <SkillsBar handleAnimation={handleAnimation} />
      <BottomTags>
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br /> &lt;/html&gt;
      </BottomTags>
    </HomeContainer>
  );
};

export default SkillsComponent;
