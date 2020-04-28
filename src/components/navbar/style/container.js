import styled from "@emotion/styled";

export const NavContainer = styled.div`
    background-color: #181818;
    position: absolute;
    top: 0;
    width: 60px;
    height: 100%;
    display: flex;
    flex-direction: column;
    // flex: 1 1 auto;
    justify-content: space-between;
`;

export const LogoDiv = styled.div`
    background-color: #070707;
    padding: 8px 0;
    height: 64px;
`;

export const NavIcon = styled.div`
    padding-top: 80px;
    padding-left: 5px;
    display: flex;
    flex-direction: column;
    height: 35vh;
    justify-content: space-around;
`;

export const SocialIcon = styled.div`
    padding-left: 5px;
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
`;

export const HoverTxt = styled.span`
    position: absolute;
    padding: 17px 0;
    padding-left: ${({paddLeft}) => paddLeft ? paddLeft : "8px"};
    color: #08fdd8;
    font-size: 9px;
    letter-spacing: 2px;
`;
