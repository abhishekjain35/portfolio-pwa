import React from "react";
import {
    TitleContainer,
    HomeContainer,
    BottomTags,
    BodySpan,
} from "../reusable-components/style";
import { P, Section, MainContainer, Span } from "./style/style";

const AboutComponent = ({ handleAnimation }) => {
    return (
        <HomeContainer>
            <BodySpan>
                &lt;html&gt; <br /> &nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;
            </BodySpan>
            <MainContainer>
                <TitleContainer
                    paddingLeft={960}
                    customH1={960}
                    onMouseOver={handleAnimation}
                >
                    {"About".split("").map((letter) => (
                        <Span key={letter}>{letter}</Span>
                    ))}
                    <span> </span>
                    <Span>m</Span>
                    <Span>e</Span>
                </TitleContainer>
                <P>
                    I'm a Full Stack developer based in India. I have a serious
                    passion for creating fully functional web applications with
                    an excellent user interface.
                </P>
                <P padd="5px">
                    I always like to explore Javascript and React. I also like
                    to learn new advancements for these technologies.
                </P>
                <P padd="5px">
                    Apart from that, I also write articles once in a while to
                    explain the tech that I learn.
                </P>
            </MainContainer>
            <Section>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </Section>
            <BottomTags>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br /> &lt;/html&gt;
            </BottomTags>
        </HomeContainer>
    );
};

export default AboutComponent;
