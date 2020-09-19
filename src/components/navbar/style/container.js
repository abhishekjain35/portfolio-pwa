import styled from "@emotion/styled";

export const NavContainer = styled.div`
    background-color: #181818;
    position: absolute;
    top: 0;
    width: 60px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 900px) {
        flex-direction: row;
        height: 60px;
        width: 100%;
    }
    z-index: 1;
`;

export const LogoDiv = styled.div`
    padding-left: 2px;
    height: 60px;
`;

export const NavIcon = styled.div`
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    height: 35vh;
    justify-content: space-around;
    @media (max-width: 900px) {
        width: 35vw;
        height: initial;
        flex-direction: row;
        padding: 0px 0 0 50px;
    }
    @media (max-width: 600px) {
        margin-right: 50px;
        width: 65vw;
    }
    @media (min-width: 900px) {
        & > a {
            width: 100%;
        }
        & > a:hover {
            width: 120px;
            background-color: #08fdd8;
            text-decoration: none;
            transition: width 0.15s ease-in;
        }
    }
`;

export const SocialIcon = styled.div`
    padding-left: 5px;
    @media (max-width: 900px) and (min-width: 600px) {
        padding-top: 10px;
        padding-right: 10px;
    }
    @media (max-width: 600px) {
        padding-left: 0;
        position: absolute;
        display: flex;
        flex-direction: column;
        background-color: #181818;
        top: 30%;
        left: 0;
    }
`;

export const Svg = styled.svg`
    margin: 10px 0;
    @media (max-width: 600px) {
        fill: #08fdd8;
    }
`;

export const NavSvg = styled.svg`
    margin: auto 0;
`;

export const LogoSvg = styled.svg`
    width: 50px;
    height: 50px;
    @media (max-width: 600px) {
        width: 40px;
        height: 40px;
        margin: 20%;
    }
`;

export const HoverDiv = styled.div`
    text-decoration: none;
    height: 55px;
    @media (max-width: 600px) {
        margin-right: 7px;
        margin-left: 7px;
    }
    display: flex;
    justify-content: center;
`;

export const HoverTxt = styled.p`
    color: #333;
    font-size: 9px;
    letter-spacing: 2px;
    margin: 0;
    height: 10px;
    margin: auto 0;
`;

export const SocialMediaDiv = styled.div`
    @media (max-width: 600px) {
        display: none;
    }
`;
