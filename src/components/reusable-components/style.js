import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

export const HomeContainer = styled.div`
    color: white;
    height: 90%;
    top: 5%;
    width: 93%;
    left: 60px;
    position: absolute;
    @media (max-width: 900px) {
        top: 10%;
        left: 0%;
    }
`;

const rubberBand = keyframes`
    from {
      transform: scale3d(1, 1, 1);
    }
  
    30% {
      transform: scale3d(1.25, 0.75, 1);
    }
  
    40% {
      transform: scale3d(0.75, 1.25, 1);
    }
  
    50% {
      transform: scale3d(1.15, 0.85, 1);
    }
  
    65% {
      transform: scale3d(.95, 1.05, 1);
    }
  
    75% {
      transform: scale3d(1.05, .95, 1);
    }
  
    to {
      transform: scale3d(1, 1, 1);
    }
  `;

export const TitleContainer = styled.div`
    font-size: 60px;
    font-weight: normal;
    line-height: 53px;
    font-family: MyWebFont, sans-serif;
    ::before {
        content: "<h1>";
        font-family: "La Belle Aurore", cursive;
        color: #515152;
        font-size: 18px;
        position: absolute;
        margin-top: -40px;
        left: -15px;
        ${({ customH1 }) =>
            (customH1 === 960 &&
                `@media (max-width: 960px) {
            margin-top: -10px;
            left: 0px;
        }`) ||
            (customH1 === 900 &&
                `@media (max-width: 900px) {
            margin-top: -10px;
            left: 0px;
        }`)}
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
    ${(props) =>
        (props.paddingLeft === 900 &&
            `
        @media (max-width: 900px) {
        padding-left: ${props.padding ? "0px" : "10%"};
    }
        `) ||
        (props.paddingLeft === 960 &&
            `
            @media (max-width: 960px) {
        padding-left: ${props.padding ? "0px" : "10%"};
    }
            `)}
    user-select: none;
    & > .blast {
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-iteration-count: 1;
        animation-name: ${rubberBand};
    }
`;

export const MainContainer = styled.div`
    left: 5%;
    top: 30%;
    width: 40%;
    height: 50%;
    position: absolute;
    @media (max-width: 1150px) {
        width: 90%;
    }
    @media (max-width: 900px) {
        left: 20%;
        width: 80%;
    }
    @media (max-width: 335px) {
        top: 17%;
    }
`;

export const BodySpan = styled.span`
    position: absolute;
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    left: 10px;
`;

export const BottomTags = styled.span`
    color: #515152;
    position: absolute;
    bottom: 0;
    left: 10px;
    font-size: 18px;
    font-family: "La Belle Aurore", cursive;
`;
