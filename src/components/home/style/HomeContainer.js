import styled from "@emotion/styled";

export const StyledSpan = styled.span`
    color: #fff;
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

export const MainImageDiv = styled.div`
    position: absolute;
    right: 10%;
    z-index: -1;
    top: 10%;
    width: 40vw;
    height: 70vh;
    @media (max-width: 900px) {
        display: none;
    }
`;

export const SocialIconDiv = styled.div`
    @media (min-width: 600px) {
        display: none;
    }
`;

export const Span = styled.span`
    display: inline-block;
`;
