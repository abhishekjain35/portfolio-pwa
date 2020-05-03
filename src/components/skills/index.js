import React from "react";
import {
    TitleContainer,
    HomeContainer,
    MainContainer,
    BottomTags,
    BodySpan,
} from "../reusable-components/style";

const SkillsPage = () => {
    return (
        <HomeContainer>
            <BodySpan>
                &lt;html&gt; <br /> &nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;
            </BodySpan>
            <MainContainer>
                <TitleContainer>Skills & Experience</TitleContainer>
            </MainContainer>
            <BottomTags>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br /> &lt;/html&gt;
            </BottomTags>
        </HomeContainer>
    );
};

export default SkillsPage;
