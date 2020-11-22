import React from "react";
import { HomeContainer, BottomTags, MainContainer, Span } from "./style/style";
import { TitleContainer, BodySpan } from "../reusable-components/style";
import SkillsBar from "./SkillBar";

const SkillsComponent = ({ handleAnimation }) => {
    return (
        <HomeContainer>
            <BodySpan>
                &lt;html&gt; <br /> &nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;
            </BodySpan>
            <MainContainer style={{ top: "12%" }}>
                <TitleContainer paddingLeft={900} customH1={900}>
                    <Span onMouseEnter={handleAnimation}>Skills</Span>
                    <span> </span>
                    <Span onMouseEnter={handleAnimation}>&</Span>
                    <br />
                    <Span onMouseEnter={handleAnimation}>Experience</Span>
                </TitleContainer>
                <SkillsBar />
            </MainContainer>
            <BottomTags>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br /> &lt;/html&gt;
            </BottomTags>
        </HomeContainer>
    );
};

export default SkillsComponent;
