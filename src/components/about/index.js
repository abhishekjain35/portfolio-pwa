import React from "react";
import {
    TitleContainer,
    HomeContainer,
    MainContainer,
    BottomTags,
    BodySpan,
} from "../reusable-components/style";

const About = () => {
    return (
        <HomeContainer>
            <BodySpan>
                &lt;html&gt; <br /> &nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;
            </BodySpan>
            <MainContainer>
                <TitleContainer>About Me</TitleContainer>
            </MainContainer>
            <BottomTags>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br /> &lt;/html&gt;
            </BottomTags>
        </HomeContainer>
    );
};

export default About;
