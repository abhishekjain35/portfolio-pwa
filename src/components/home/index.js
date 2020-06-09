import React from "react";
import {
    StyledSpan,
    Skills,
    Connect,
    Img,
    SocialIconDiv,
} from "./style/HomeContainer";
import {
    BodySpan,
    BottomTags,
    HomeContainer,
    TitleContainer,
    MainContainer,
} from "../reusable-components/style";
import Profile from "../../assets/Profile.png";
import SocialMedia from "./../navbar/socialMedia";

const HomePage = () => {
    let info = "Hi,$I'm Abhishek,$web developer.";

    return (
        <HomeContainer>
            <BodySpan>
                &lt;html&gt; <br /> &nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;
            </BodySpan>
            <SocialIconDiv>
                <SocialMedia />
            </SocialIconDiv>
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
                <Connect
                    href="https://www.linkedin.com/in/abhishekjain35/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    CONNECT WITH ME
                </Connect>
            </MainContainer>
            <Img src={Profile} alt="profile image" />
            <BottomTags>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br /> &lt;/html&gt;
            </BottomTags>
        </HomeContainer>
    );
};

export default HomePage;
