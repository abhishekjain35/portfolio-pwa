import React from "react";
import { HomeContainer } from "../reusable-components/style";
import { Header, CardDiv, Card } from "./style/style";

const ProjectsPage = () => {
    return (
        <HomeContainer>
            <Header>
                <h1>Checkout some awesome works of mine</h1>
            </Header>
            <CardDiv>
                <Card>
                    <h3>TITLE GOES HERE</h3>
                    <h5>Aug -sep 2019</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sequi laborum atque reprehenderit maxime? Minus numquam
                        qui delectus voluptate vel nihil? Lorem ipsum dolor
                    </p>
                </Card>
                <Card>
                    <h3>HI</h3>
                </Card>
                <Card>
                    <h3>HI</h3>
                </Card>
                <Card>
                    <h3>HI</h3>
                </Card>
                <Card>
                    <h3>HI</h3>
                </Card>
                <Card>
                    <h3>HI</h3>
                </Card>
            </CardDiv>
        </HomeContainer>
    );
};

export default ProjectsPage;
