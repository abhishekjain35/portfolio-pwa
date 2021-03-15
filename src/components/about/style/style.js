import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";
import ReactLogo from "../../../assets/ReactLogo.png";
import MongoIcon from "../../../assets/MongoIcon.png";
import NodeIcon from "../../../assets/NodeIcon.png";
import ExpressIcon from "../../../assets/Express.png";
import { rubberBand } from "../../reusable-components/style";

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
  right: 40%;
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
    transform: rotateY(90deg) rotateZ(60deg) rotateX(180deg) translateY(-400px);
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
    content: url(${ExpressIcon});
  }
  @media (max-width: 960px) {
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
  @media (max-width: 800px) {
    width: initial;
  }
  @media (max-width: 960px) {
    left: 14%;
    width: 85%;
    /* overflow-y: scroll; */
    height: 73%;
  }
  @media (max-width: 390px) {
    height: 70%;
  }
`;

export const Span = styled.span`
  display: inline-block;
`;

export const TitleContainer = styled.div`
  font-size: ${(props) => (props?.fontSize ? props.fontSize : 60)}px;
  font-weight: normal;
  line-height: ${(props) => (props?.lineHeight ? props.lineHeight : 53)}px;
  font-family: MyWebFont, sans-serif;
  ::before {
    content: "<h1>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 18px;
    position: absolute;
    margin-top: -40px;
    left: -15px;
    @media (max-width: 960px) {
      margin-top: -25px;
      left: 0px;
    }
  }
  ::after {
    content: "</h1>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 18px;
    position: absolute;
    margin-top: 18px;
    margin-left: 20px;
    @media (max-width: 420px) and (min-width: 330px) {
      margin-left: -2px;
    }
    @media (max-width: 350px) {
      display: ${(props) =>
        props.displayNoneAtSmallScreen ? "none" : "initial"};
    }
  }
  @media (max-width: 1024px) {
    font-size: 54px;
    line-height: 53px;
  }
  @media (max-width: 750px) {
    font-size: 47px;
    line-height: 40px;
  }
  @media (max-width: 530px) {
    font-size: 40px;
  }
  @media (max-width: 960px) {
    padding-left: 0px;
  }
  user-select: none;
  & > .blast {
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-iteration-count: 1;
    animation-name: ${rubberBand};
  }
`;
