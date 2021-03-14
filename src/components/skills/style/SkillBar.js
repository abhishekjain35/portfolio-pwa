import styled from "@emotion/styled";
import { rubberBand } from "../../reusable-components/style";

export const Container = styled.section`
  display: flex;
  color: white;
  flex: 1 1 80%;
  justify-content: space-between;
  padding-top: 25px;
  @media (max-width: 900px) {
    flex-direction: column;
    padding-left: 20px;
  }
`;

export const LeftContainer = styled.aside`
  display: flex;
  flex-direction: column;
  width: 45%;
  margin-left: 7%;
  padding-top: 20px;
  @media (max-width: 900px) {
    width: 93%;
  }
`;

export const RightContainer = styled.aside`
  display: flex;
  flex-direction: column;
  width: 45%;
  justify-content: center;
  @media (max-width: 900px) {
    width: 95%;
  }
`;

export const Span = styled.span`
  display: inline-block;
  &::first-letter {
    color: #ff2253;
  }
`;

export const ProgressContainer = styled.div`
  overflow-y: scroll;
  height: 60vh;
  padding: 20px 10px;
  width: 90%;
  @media (max-width: 600px) {
    padding: 20px 5px;
    height: initial;
  }
`;

export const SkillContainer = styled.div`
  margin-bottom: 20px;
`;

export const SkillTitle = styled.span`
  font-size: 18px;
  font-family: MyWebFont, sans-serif;
  margin-bottom: 7px;
  display: block;
`;

export const ProgressBar = styled.footer`
  background-color: #373737;
  height: 2px;
`;

export const ProgressBarChildren = styled.div`
  width: ${(props) => props.width}%;
  height: 100%;
  background-color: #08fdd8;
  transition: width 1.3s ease-out;
  background: ${(props) => props.color};
`;

export const TitleContainer = styled.div`
  font-size: 45px;
  font-weight: normal;
  line-height: 40px;
  font-family: MyWebFont, sans-serif;
  user-select: none;
  ::before {
    content: "<h1>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 18px;
    position: absolute;
    margin-top: -30px;
    margin-left: -20px;
    @media (max-width: 900px) {
      margin-left: 0px;
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
    @media (max-width: 320px) {
      margin-left: 0;
    }
  }
  & > .blast {
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-iteration-count: 1;
    animation-name: ${rubberBand};
  }
  @media (max-width: 290px){
    font-size: 40px;
    line-height: 35px;
  }
`;
