import React from "react";
import {
    HomeContainer,
    BottomTags,
    MainContainer,
} from "./style/style";
import { TitleContainer, BodySpan } from "../reusable-components/style";
import SkillsBar from "./SkillBar";

const SkillsPage = () => {
    return (
        <HomeContainer>
            <BodySpan>
                &lt;html&gt; <br /> &nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;
            </BodySpan>
            <MainContainer style={{ top: "15%" }}>
                <TitleContainer>Skills & Experience</TitleContainer>
                <SkillsBar />
            </MainContainer>
            <BottomTags>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br /> &lt;/html&gt;
            </BottomTags>
        </HomeContainer>
    );
};

export default SkillsPage;
