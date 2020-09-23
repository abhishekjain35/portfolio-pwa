import styled from "@emotion/styled";

export const Header = styled.div`
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
    @media (max-width: 900px) {
        padding-top: 60px;
        padding-bottom: 0;
    }
`;

export const CardDiv = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    justify-content: center;
    color: rgb(70, 70, 70);
    font-family: Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Ubuntu,
        Cantarell, Fira Sans, Droid Sans, sans-serif;
    scroll-behavior: smooth;
`;

export const Card = styled.div`
    padding: 10px;
    background-color: #e0c595;
    width: 25%;
    box-shadow: rgba(0, 0, 0, 0.082) 0px 0px 10px 0px;
    overflow-wrap: break-word;
    margin: 20px 40px;
    transition: box-shadow 500ms ease 0s;
    padding: 10px 35px;
    border-radius: 5px;
    color: black;
    text-align: center;
    @media (max-width: 768px) {
        width: 100%;
        padding: 10px 25px;
        margin: 20px 20px;
    }
`;

export const P = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 25px;
    opacity: 0.9;
`;

export const Date = styled.h5`
    font-size: 14px;
    margin-top: 5px;
`;

export const HomeContainer = styled.div`
    color: white;
    height: 100%;
    width: 93%;
    left: 60px;
    position: absolute;
    @media (max-width: 900px) {
        left: 3%;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    scrollbar-width: none;
    overflow-y: scroll;
`;
