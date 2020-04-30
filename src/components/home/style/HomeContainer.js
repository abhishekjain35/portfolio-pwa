import styled from "@emotion/styled";

export const HomeContainer = styled.div`
    color: white;
    // position: absolute;
`;

export const HeadContainer = styled.div`
    font-size: 3em;
    font-weight: 700;
    left: 10%;
    top: 30%;
    width: 40%;
    height: 50%;
    position: absolute;
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
        content: "<h1/>";
        font-family: "La Belle Aurore", cursive;
        color: #515152;
        font-size: 18px;
        position: absolute;
        margin-top: 18px;
        margin-left: 20px;
        // -webkit-animation: myanim2 1s 1.7s backwards;
        // animation: myanim2 1s 1.7s backwards;
    }
`;

export const StyledSpan = styled.span`
    color: #fff;
`;

export const BodySpan = styled.span`
    position: absolute;
    top: 5%;
    left: 7%;
    font-family: "La Belle Aurore", cursive;
    color: #515152;
`;

export const BottomTags = styled.span`
    color: #515152;
    position: absolute;
    bottom: 0;
    left: 80px;
    font-size: 18px;
    font-family: "La Belle Aurore", cursive;
`;
