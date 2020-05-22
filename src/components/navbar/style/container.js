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
    background-color: #070707;
    // padding: 8px 0;
    height: 60px;
`;

export const NavIcon = styled.div`
    padding-top: 80px;
    padding-left: 5px;
    display: flex;
    flex-direction: column;
    height: 35vh;
    justify-content: space-around;
    @media (max-width: 900px) {
        width: 35vw;
        height: initial;
        flex-direction: row;
        padding: 5px 0 0 50px;
    }
    @media (max-width: 600px){
        margin-right: 50px;
        width: 65vw;
    }
`;

export const SocialIcon = styled.div`
    padding-left: 5px;
    @media (max-width: 900px) and (min-width: 600px) {
        padding-top: 10px;
        padding-right: 10px;
    }
    @media (max-width: 600px){
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
`;

export const NavSvg = styled.svg`
    margin: 10px 0;
`;

export const HoverDiv = styled.div`
    text-decoration: none;
    height: 55px;
    width: 49px;
    @media (max-width: 600px){
        margin-right: 7px;
        margin-left: 7px;
    }
`;

export const HoverTxt = styled.span`
    position: absolute;
    padding: 17px 0;
    padding-left: ${({ paddLeft }) => (paddLeft ? paddLeft : "8px")};
    color: #08fdd8;
    font-size: 9px;
    letter-spacing: 2px;
`;

export const SocialMediaDiv = styled.div`
    @media (max-width : 600px){
        display: none;
    }
`