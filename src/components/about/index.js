import React from "react";
import {
    TitleContainer,
    HomeContainer,
    MainContainer,
    BottomTags,
    BodySpan,
} from "../reusable-components/style";
import { P } from "./style/style";

const About = () => {
    return (
        <HomeContainer>
            <BodySpan>
                &lt;html&gt; <br /> &nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;
            </BodySpan>
            <MainContainer>
                <TitleContainer>About Me</TitleContainer>
                <P>I'm a MERN Stack developer based in India.</P>
            </MainContainer>
            <BottomTags>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br /> &lt;/html&gt;
            </BottomTags>
        </HomeContainer>
    );
};

export default About;
