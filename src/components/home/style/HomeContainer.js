import styled from "@emotion/styled";

export const HomeContainer = styled.div`
    color: white;
    height: 90%;
    top: 5%;
    width: 100%;
    position: absolute;
`;

export const TitleContainer = styled.div`
    font-size: 60px;
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

export const MainContainer = styled.div`
    left: 10%;
    top: 30%;
    width: 40%;
    height: 50%;
    position: absolute;
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

export const Skills = styled.h1`
    color: #8d8d8d;
    margin-top: 20px;
    font-weight: 400;
    font-size: 11px;
    font-family: "Open Sans", sans-serif;
    letter-spacing: 3px;
`;

export const Connect = styled.a`
    color: #08fdd8;
    font-size: 13px;
    letter-spacing: 4px;
    font-family: "Open Sans", sans-serif;
    text-decoration: none;
    padding: 10px 18px;
    border: 1px solid #08fdd8;
    margin-top: 25px;
    float: left;
    :hover {
        background: #08fdd8;
        color: #333;
    }
`;
