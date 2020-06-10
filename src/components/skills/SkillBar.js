import React from "react";
import {
    Container,
    LeftContainer,
    RightContainer,
    SkillDiv,
    TitleSkillDiv,
    Progress,
} from "./style/SkillBar";

const SkillsBar = () => {
    return (
        <Container>
            <LeftContainer>
                <SkillDiv>
                    <TitleSkillDiv>
                        <p>JavaScript</p>
                        <p>90%</p>
                    </TitleSkillDiv>
                    <Progress value="90" max="100"></Progress>
                </SkillDiv>
                <SkillDiv>
                    <TitleSkillDiv>
                        <p>JavaScript</p>
                        <p>90%</p>
                    </TitleSkillDiv>
                    <Progress value="90" max="100"></Progress>
                </SkillDiv>
                <SkillDiv>
                    <TitleSkillDiv>
                        <p>JavaScript</p>
                        <p>90%</p>
                    </TitleSkillDiv>
                    <Progress value="90" max="100"></Progress>
                </SkillDiv>
                <SkillDiv>
                    <TitleSkillDiv>
                        <p>JavaScript</p>
                        <p>90%</p>
                    </TitleSkillDiv>
                    <Progress value="90" max="100"></Progress>
                </SkillDiv>
                <SkillDiv>
                    <TitleSkillDiv>
                        <p>JavaScript</p>
                        <p>90%</p>
                    </TitleSkillDiv>
                    <Progress value="90" max="100"></Progress>
                </SkillDiv>
            </LeftContainer>
            <RightContainer>
                <SkillDiv>
                    <TitleSkillDiv>
                        <p>JavaScript</p>
                        <p>80%</p>
                    </TitleSkillDiv>
                    <Progress value="80" max="100"></Progress>
                </SkillDiv>
                <SkillDiv>
                    <TitleSkillDiv>
                        <p>JavaScript</p>
                        <p>90%</p>
                    </TitleSkillDiv>
                    <Progress value="90" max="100"></Progress>
                </SkillDiv>
                <SkillDiv>
                    <TitleSkillDiv>
                        <p>JavaScript</p>
                        <p>90%</p>
                    </TitleSkillDiv>
                    <Progress value="90" max="100"></Progress>
                </SkillDiv>
                <SkillDiv>
                    <TitleSkillDiv>
                        <p>JavaScript</p>
                        <p>90%</p>
                    </TitleSkillDiv>
                    <Progress value="90" max="100"></Progress>
                </SkillDiv>
                <SkillDiv>
                    <TitleSkillDiv>
                        <p>JavaScript</p>
                        <p>90%</p>
                    </TitleSkillDiv>
                    <Progress value="90" max="100"></Progress>
                </SkillDiv>
            </RightContainer>
        </Container>
    );
};

export default SkillsBar;
