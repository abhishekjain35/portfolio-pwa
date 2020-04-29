import React from "react";
import {
    HomeContainer,
    HeadContainer,
    StyledSpan,
} from "./style/HomeContainer";

const HomePage = () => {
    let info = "Hi,$I'm Abhishek,$web developer.";
    console.log(info.split(""))

    return (
        <HomeContainer>
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
        </HomeContainer>
    );
};

export default HomePage;
