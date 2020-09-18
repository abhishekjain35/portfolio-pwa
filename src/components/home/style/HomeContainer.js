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

export const TitleContainer = styled.div`
    font-size: 3.4vw;
    font-weight: 650;
    line-height: 4.2vw;
    overflow: hidden;
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
        @media (max-width: 420px) and (min-width: 345px) {
            margin-left: -2px;
        }
        /* right: 50%; */
    }
    @media (max-width: 1000px) {
        font-size: 37px;
        line-height: 53px;
    }
    @media (max-width: 400px) and (min-width: 345px) {
        width: 95%;
    }
`;
