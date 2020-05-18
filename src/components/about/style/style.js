import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import ReactLogo from "../../../assets/ReactLogo.png";
import MongoIcon from "../../../assets/MongoIcon.png";
import NodeIcon from "../../../assets/NodeIcon.png";
import ExpressIcon from "../../../assets/ExpressIcon.png";

const spin = keyframes`
    0% {
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    100% {
        transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
    }
`;

export const P = styled.p`
    padding-top: ${({ padd }) => (padd ? padd : "20px")};
    font-size: 17px;
    line-height: 30px;
`;

export const Section = styled.section`
    position: absolute;
    // left: 60%;
    right: 40%;
    // padding-left: 120px;
    top: 50%;
    margin-top: -210px;
    height: 500px;
    width: 100px;
    transform-style: preserve-3d;
    animation: ${spin} 10s linear infinite;
    transform-origin: 116px 200px 116px;

    & > div:first-of-type {
        border-color: transparent transparent transparent rgba(50, 50, 50, 0.6);
        transform: rotateY(-19.5deg) rotateX(180deg) translateY(-400px);
    }
    & > div {
        position: absolute;
        border-style: solid;
        border-width: 200px 0 200px 346px;
        transform-origin: 0 0;
    }
    & > div:first-of-type:after {
        position: absolute;
        content: url(${ReactLogo});
    }
    & > div:after {
        position: absolute;
        color: #fff;
        left: -311px;
        top: -69px;
        text-align: center;
        opacity: 0.6;
    }
    & > div:nth-of-type(2) {
        border-color: transparent transparent transparent rgba(50, 50, 50, 0.6);
        transform: rotateY(90deg) rotateZ(60deg) rotateX(180deg)
            translateY(-400px);
    }
    & > div:nth-of-type(2):after {
        position: absolute;
        content: url(${MongoIcon});
    }
    > div:nth-of-type(3) {
        border-color: transparent transparent transparent rgba(50, 50, 50, 0.9);
        transform: rotateX(60deg) rotateY(19.5deg);
    }
    & > div:nth-of-type(3):after {
        position: absolute;
        content: url(${NodeIcon});
    }
    & > div:nth-of-type(4) {
        border-color: transparent transparent transparent rgba(50, 50, 50, 0.8);
        transform: rotateX(-60deg) rotateY(19.5deg) translateX(-116px)
            translateY(-200px) translateZ(326px);
    }
    & > div:nth-of-type(4):after {
        position: absolute;
        // width: 150px;
        content: url(${ExpressIcon});
        // left: -315px;
        // top: -91px;
    }
    @media (max-width: 800px){
        display: none;
    }
`;

export const MainContainer = styled.div`
    left: 5%;
    top: 25%;
    width: 32%;
    height: 50%;
    position: absolute;
    @media (max-width: 1255px) {
        top: 14%;
    }
    @media (max-width: 1150px) {
        width: 90%;
    }
    @media (max-width: 900px){
        left: 14%;
        width: 90%;
        overflow-y: scroll;
        height: 70%;
    }
    @media (max-width: 350px){
        top: 15%;
    }
`;
