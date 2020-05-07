import styled from "@emotion/styled";
import Skills from "../../../assets/Skills.png";

export const ImgDiv = styled.div`
    position: absolute;
    right: 0;
    top: 10%;
    z-index: -1;
    width: 47%;
    height: 70%;
    background-image: url(${Skills});
    background-size: cover;
    @media (max-width: 1300px) and (min-width: 1150px) {
        width: 53%;
    }
    @media (max-width: 1150px) and (min-width: 1000px) {
        width: 61%;
    }
`;
