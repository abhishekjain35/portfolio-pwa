import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    width: 80vw;
    height: 50vh;
    /* border: 5px solid orangered; */
    color: white;
    padding: 50px;
`;

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
`;

export const SkillDiv = styled.div`
    color: white;
    margin: 10px;
`;

export const TitleSkillDiv = styled.div`
    display: flex;
    justify-content: space-between;
    p {
        font-size: 20px;
    }
`;

export const Progress = styled.progress`
    width: 100%;
    border: none;
    border-radius: 10px;
    background-color: #8A8A8A;
    &::-moz-progress-bar {
        background: #e0c595;
    }
`;
