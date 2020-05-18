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

export const HomeContainer = styled.div`
    color: white;
    height: 90%;
    top: 5%;
    width: 93%;
    left: 60px;
    position: absolute;
    @media (max-width: 900px){
        top: 10%;
        left: 3%;
    }
`;

export const BottomTags = styled.span`
    color: #515152;
    position: absolute;
    bottom: 0;   
    left: 10px;
    font-size: 18px;
    font-family: "La Belle Aurore", cursive;
`;

export const MainContainer = styled.div`
    left: 5%;
    top: 30%;
    width: 60%;
    height: 50%;
    position: absolute;
    @media (max-width: 1150px) {
        width: 90%;
    }
    @media (max-width: 900px){
        left: 14%;
        width: 80%;
        overflow-y: scroll;
        height: 70%;
    }
    @media (max-width: 350px){
        top: 15%;
    }
`;