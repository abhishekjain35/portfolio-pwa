import React from "react";
import {
    Container,
    LeftContainer,
    RightContainer,
    SkillDiv,
    TitleSkillDiv,
    Progress,
} from "./style/SkillBar";

const SkillsDiv = ({ name, value }) => {
    return (
        <SkillDiv>
            <TitleSkillDiv>
                <p>{name}</p>
                <p>{`${value}%`}</p>
            </TitleSkillDiv>
            <Progress value={value} max="100"></Progress>
        </SkillDiv>
    );
};

const SkillsBar = () => {
    return (
        <Container>
            <LeftContainer>
                <SkillsDiv name="JavaScript" value="85" />
                <SkillsDiv name="React" value="80" />
                <SkillsDiv name="NodeJS" value="70" />
                <SkillsDiv name="MongoDB" value="70" />
                <SkillsDiv name="ExpressJS" value="75" />
            </LeftContainer>
            <RightContainer>
                <SkillsDiv name="HTML" value="90" />
                <SkillsDiv name="CSS" value="90" />
                <SkillsDiv name="Git" value="80" />
                <SkillsDiv name="REST Api" value="70" />
                <SkillsDiv name="Bootstrap" value="75" />
            </RightContainer>
        </Container>
    );
};

export default SkillsBar;
