import React from "react";
import {
    HomeContainer,
    HeadContainer,
    StyledSpan,
    BodySpan,
    BottomTags
} from "./style/HomeContainer";

const HomePage = () => {
    let info = "Hi,$I'm Abhishek,$web developer.";

    return (
        <HomeContainer>
            <BodySpan>&lt;body&gt;</BodySpan>
            <HeadContainer>
                {info.split("").map((letter, index) => {
                    if (letter === "$") {
                        return <br key={index} />;
                    }
                    const style = { "animationDelay": 0.5 + index / 10 + "s" };
                    return (
                        <StyledSpan style={style} key={index}>
                            {letter}
                        </StyledSpan>
                    );
                })}
            </HeadContainer>
            <BottomTags>&lt;/body&gt; <br /> &lt;/html&gt;</BottomTags>
        </HomeContainer>
    );
};

export default HomePage;
