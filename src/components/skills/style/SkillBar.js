import styled from "@emotion/styled";
import { rubberBand } from "../../reusable-components/style";

// export const Container = styled.div`
//   display: flex;
//   color: white;
//   padding: 15px;
//   @media (max-width: 900px) {
//     display: initial;
//     padding: 0;
//   }
//   margin-top: 10px;
//   height: 90%;
//   overflow-y: scroll;
// `;

// export const LeftContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 40%;
//   padding: 10px 0 10px 0;
//   @media (max-width: 900px) {
//     width: 90%;
//     margin-left: 5%;
//   }
// `;

// // export const RightContainer = styled.div`
// //   display: flex;
// //   flex-direction: column;
// //   width: 90%;
// //   @media (max-width: 900px) {
// //     width: 90%;
// //     margin-left: 5%;
// //   }
// // `;

// export const SkillDiv = styled.div`
//   color: white;
//   margin: 10px;
// `;

// export const TitleSkillDiv = styled.div`
//   display: flex;
//   justify-content: space-between;
//   p {
//     font-size: 20px;
//     margin: 25px 0 10px 0;
//     @media (max-width: 900px) {
//       font-size: 15px;
//     }
//   }
// `;

// export const Progress = styled.progress`
//   appearance: none;
//   width: 100%;
//   background-color: #8a8a8a;
//   height: 15px;
//   border-radius: 10px;
//   &::-webkit-progress-value {
//     background: #e0c595;
//     border: 0;
//     border-radius: 10px;
//   }
//   &::-webkit-progress-bar {
//     border-radius: 10px;
//   }
//   &::-moz-progress-bar {
//     background: #e0c595;
//     border-radius: 10px;
//   }
//   border-style: none;
// `;

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
  justify-content: space-around;
  margin-left: 7%;
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
  @media (max-width: 600px) {
    margin-top: 50px;
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
  height: 75%;
  padding: 0 10px;
  width: 90%;
  @media (max-width: 600px) {
    padding: 0 5px;
    overflow-y: initial;
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
    margin-top: -30px;
    margin-left: -20px;
    @media (max-width: 900px) {
      margin-left: 0px;
    }
    /* left: -15px; */
    /* ${({ customH1 }) =>
      (customH1 === 960 &&
        `@media (max-width: 960px) {
            margin-top: -10px;
            left: 0px;
        }`) ||
      (customH1 === 900 &&
        `@media (max-width: 900px) {
            margin-top: -10px;
            left: 0px;
        }`)} */
  }
  ::after {
    content: "</h1>";
    font-family: "La Belle Aurore", cursive;
    color: #515152;
    font-size: 18px;
    position: absolute;
    margin-top: 18px;
    margin-left: 20px;
    @media (max-width: 300px) {
      margin-left: 0;
    }
  }
  /* @media (max-width: 1024px) {
    font-size: 54px;
    line-height: 53px;
  }
  @media (max-width: 750px) {
    font-size: 47px;
    line-height: 40px;
  }
  @media (max-width: 530px) {
    font-size: 40px;
  } */
  /* ${(props) =>
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
            `)} */
  user-select: none;
  & > .blast {
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-iteration-count: 1;
    animation-name: ${rubberBand};
  }
`;
