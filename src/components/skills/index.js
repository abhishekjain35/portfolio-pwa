import React from "react";

import { ImgDiv, P } from "./style/style";
import {
    TitleContainer,
    HomeContainer,
    MainContainer,
    BottomTags,
    BodySpan,
} from "../reusable-components/style";

const SkillsPage = () => {
    return (
        <HomeContainer>
            <BodySpan>
                &lt;html&gt; <br /> &nbsp;&nbsp;&nbsp;&nbsp;&lt;body&gt;
            </BodySpan>
            <MainContainer style={{ top: "15%" }}>
                <TitleContainer>Skills & Experience</TitleContainer>
                <P>
                    I started with learning basics of web development from
                    freecodecamp. I made few websites with HTML and CSS, then i
                    moved to responsive development.
                </P>
                <P padd="15px">
                    After that i came to know the amazing world of JavaScript. I
                    made few websites with vanilla JavaScript and JQuery.
                </P>
                <P padd="15px">
                    Then i came to know about React. I started learning it by
                    making a video rental web app and a counter app. Then i
                    moved to advanced React features like Styled-components,
                    hooks, Reusable-components etc.
                </P>
                <P padd="15px">
                    After that, i got interested in backend development, so i
                    started learning NodeJs with ExpressJs. I also used MongoDB
                    as database. With these technologies, i made backend of the
                    video rental web app.
                </P>
                <P padd="15px">
                    Recently i made a fully functional T-shirt Store web app
                    with MERN stack.
                </P>
            </MainContainer>
            <ImgDiv />
            <BottomTags>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt; <br /> &lt;/html&gt;
            </BottomTags>
        </HomeContainer>
    );
};

export default SkillsPage;
