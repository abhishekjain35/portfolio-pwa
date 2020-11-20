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
    display: block;
    text-align: center;
    @media (max-width: 900px) {
        width: 42%;
        position: absolute;
        left: 50%;
        margin-left: -19%;
        float: left;
        overflow: hidden;
        text-align: center;
        height: 60px;
        top: 0;
        margin-top: 0;
    }
    @media (max-width: 600px){
        left: initial;
        right: 0;
        width: 70%;
    }
    & > a {
        @media (max-width: 900px) {
            float: left;
            margin-left: 14%;
            line-height: 60px;
            height: 100% !important;
            &:first-of-type{
                margin-left: 0;
            }
        }
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
    & > a {
        font-size: 20px;
        color: #a5a5a5;
        margin-bottom: 15px;
        display: block;
        height: 51px;
        position: relative;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
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

export const LogoSvg = styled.svg`
    width: 50px;
    height: 50px;
    @media (max-width: 600px) {
        width: 40px;
        height: 40px;
        margin: 20%;
    }
`;

export const HoverTxt = styled.p`
    color: #333;
    font-size: 9px;
    letter-spacing: 2px;
    margin: 0;
    display: inline-block;
`;

export const SocialMediaDiv = styled.div`
    @media (max-width: 600px) {
        display: none;
    }
`;

export const Icon = styled.i`
    font-family: "icomoon" !important;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 40px;
    height: 25px;
    color: rgb(77, 77, 78);

    &:before {
        content: attr(data-icon);
        font-size: ${(props) => (props.fontSize ? props.fontSize : "20px")};
    }
    @media (max-width: 900px){
        width: initial;
    }
`;
