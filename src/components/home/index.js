import React from "react";
import {
    Skills,
    Connect,
    SocialIconDiv,
    MainImageDiv,
} from "./style/HomeContainer";
import {
    BodySpan,
    BottomTags,
    HomeContainer,
    MainContainer,
} from "../reusable-components/style";
import SocialMedia from "./../navbar/socialMedia";
import Title from "./title"
import Svg from "./svg"

const HomeComponent = () => {
    
    return (
        <HomeContainer>
            <BodySpan>
                &lt;html&gt; <br /> &nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;
            </BodySpan>
            <SocialIconDiv>
                <SocialMedia />
            </SocialIconDiv>
            <MainContainer>
                <Title />
                <Skills>Full Stack Web Developer</Skills>
                <Connect
                    href="https://www.linkedin.com/in/abhishekjain35/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    CONNECT WITH ME
                </Connect>
            </MainContainer>
            <MainImageDiv>
                <Svg />
            </MainImageDiv>
            <BottomTags>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br /> &lt;/html&gt;
            </BottomTags>
        </HomeContainer>
    );
};

export default HomeComponent;
