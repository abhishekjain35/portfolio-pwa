import styled from "@emotion/styled";

export const HomeContainer = styled.div`
    color: white;
    height: 90%;
    top: 5%;
    width: 93%;
    left: 60px;
    position: absolute;
`;

export const TitleContainer = styled.div`
    font-size: 4vw;
    // font-size: 60px;
    font-weight: 650;
    line-height: 53px;
    ::before {
        content: "<h1>";
        font-family: "La Belle Aurore", cursive;
        color: #515152;
        font-size: 18px;
        position: absolute;
        margin-top: -40px;
        left: -15px;
    }
    ::after {
        content: "</h1>";
        font-family: "La Belle Aurore", cursive;
        color: #515152;
        font-size: 18px;
        position: absolute;
        margin-top: 18px;
        margin-left: 20px;
        // -webkit-animation: myanim2 1s 1.7s backwards;
        // animation: myanim2 1s 1.7s backwards;
    }
    @media (max-width: 1000px) {
        font-size: 40px;
    }
`;

export const MainContainer = styled.div`
    left: 5%;
    top: 30%;
    width: 60%;
    height: 50%;
    position: absolute;
`;

export const BodySpan = styled.span`
    position: absolute;
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    left: 10px;
`;

export const BottomTags = styled.span`
    color: #515152;
    position: absolute;
    bottom: 0;
    left: 10px;
    font-size: 18px;
    font-family: "La Belle Aurore", cursive;
`;

