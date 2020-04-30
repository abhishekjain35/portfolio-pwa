import React from "react";
import {
    HomeContainer,
    TitleContainer,
    StyledSpan,
    BodySpan,
    BottomTags,
    Skills,
    MainContainer,
    Connect
} from "./style/HomeContainer";

const HomePage = () => {
    let info = "Hi,$I'm Abhishek,$web developer.";

    return (
        <HomeContainer>
            <BodySpan>&lt;body&gt;</BodySpan>
            <MainContainer>
                <TitleContainer>
                    {info.split("").map((letter, index) => {
                        if (letter === "$") {
                            return <br key={index} />;
                        }
                        const style = {
                            animationDelay: 0.5 + index / 10 + "s",
                        };
                        return (
                            <StyledSpan style={style} key={index}>
                                {letter}
                            </StyledSpan>
                        );
                    })}
                </TitleContainer>
            <Skills>MERN Stack Developer</Skills>
            <Connect>CONNECT WITH ME</Connect>
            </MainContainer>
            <BottomTags>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br /> &lt;/html&gt;
            </BottomTags>
        </HomeContainer>
    );
};

export default HomePage;
