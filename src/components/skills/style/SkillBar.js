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
        margin: 25px 0 10px 0;
    }
`;

export const Progress = styled.progress`
    appearance: none;
    width: 100%;
    background-color: #8a8a8a;
    height: 15px;
    border-radius: 10px;
    &::-webkit-progress-value {
        background: #e0c595;
        border: 0;
        border-radius: 10px;
    }
    &::-webkit-progress-bar {
        border-radius: 10px;
    }
    &::-moz-progress-bar {
        background: #e0c595;
        border-radius: 10px;
    }
    border-style: none;
`;
