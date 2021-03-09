import React from "react";
import {
  Container,
  LeftContainer,
  RightContainer,
  ProgressContainer,
  Span,
  SkillContainer,
  SkillTitle,
  ProgressBar,
  ProgressBarChildren,
  TitleContainer,
} from "./style/SkillBar";
import Canvas from "./canvas";

const SkillsDiv = ({ name, value }) => {
  const colors = ["#08fdd8", "#ff2253", "#D26CD5"];
  return (
    <SkillContainer>
      <SkillTitle>{name}</SkillTitle>
      <ProgressBar>
        <ProgressBarChildren
          width={value}
          color={colors[(Math.random() * 3) | 0]}
        />
      </ProgressBar>
    </SkillContainer>
  );
};

const SkillsBar = ({ handleAnimation }) => {
  return (
    <Container>
      <LeftContainer>
        <TitleContainer
          paddingLeft={900}
          customH1={900}
          fontSize={45}
          lineHeight={40}
        >
          <Span onMouseEnter={handleAnimation}>Skills</Span>
          <span> </span>
          <Span onMouseEnter={handleAnimation} style={{ color: "#ff2253" }}>
            &
          </Span>
          <br />
          <Span onMouseEnter={handleAnimation}>Experience</Span>
        </TitleContainer>
        <ProgressContainer>
          <SkillsDiv name="JavaScript" value="90" />
          <SkillsDiv name="React" value="85" />
          <SkillsDiv name="NodeJS" value="80" />
          <SkillsDiv name="MongoDB" value="75" />
          <SkillsDiv name="ExpressJS" value="75" />
          <SkillsDiv name="HTML" value="90" />
          <SkillsDiv name="CSS" value="90" />
          <SkillsDiv name="Git" value="80" />
          <SkillsDiv name="REST Api" value="75" />
          <SkillsDiv name="Bootstrap" value="75" />
        </ProgressContainer>
      </LeftContainer>
      <RightContainer>
        <Canvas />
      </RightContainer>
    </Container>
  );
};

export default SkillsBar;
