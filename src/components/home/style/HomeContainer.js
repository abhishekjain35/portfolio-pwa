import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

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
    /* font-size: 3.4vw; */
    /* font-weight: 650; */
    /* line-height: 4.2vw; */
    line-height: 53px;
    /* overflow: hidden; */
    font-family: MyWebFont, sans-serif;
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
    }
    @media (max-width: 1024px) {
        font-size: 54px;
        line-height: 53px;
    }
    @media (max-width: 750px){
        font-size: 47px;
        line-height: 40px;
    }
    @media (max-width: 530px){
        font-size:40px;
    }
    @media (max-width: 400px) and (min-width: 345px) {
        width: 95%;
    }

    user-select: none;
    & > .blast {
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-iteration-count: 1;
        animation-name: ${rubberBand};
    }
`;

export const Span = styled.span`
    display: inline-block;
`;
