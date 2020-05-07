import styled from "@emotion/styled";
import Skills from "../../../assets/Skills.png";

export const ImgDiv = styled.div`
    position: absolute;
    right: 0;
    top: 15%;
    z-index: -1;
    width: 47%;
    height: 70%;
    background-image: url(${Skills});
    background-size: cover;
    @media (max-width: 1300px) and (min-width: 1150px) {
        width: 53%;
    }
    @media (max-width: 1150px) {
        display: none;
    }
`;

export const P = styled.p`
    margin: 0px;
    padding-top: ${({ padd }) => (padd ? padd : "30px")};
    font-size: 17px;
    line-height: 30px;
    width: 90%;
    @media (max-width: 1150px) {
        width: 100%;
    }
`;
