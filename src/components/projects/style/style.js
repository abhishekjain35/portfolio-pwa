import styled from "@emotion/styled";

export const Header = styled.div`
    text-align: center;
`;

export const CardDiv = styled.div`
    display: flex;
    position: absolute;
    width: 100%;
    // padding: 50px;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    justify-content: center;
    color: rgb(70, 70, 70);
    font-family: Roboto,-apple-system,BlinkMacSystemFont,Segoe UI,Ubuntu,Cantarell,Fira Sans,Droid Sans,sans-serif;
}
`;

export const Card = styled.div`
    padding: 10px;
    // background-color: #262626;
    background-color: #ae936c;
    background-color: #e0c595;
    width: 25%;
    box-shadow: rgba(0, 0, 0, 0.082) 0px 0px 10px 0px;
    overflow-wrap: break-word;
    margin: 20px 40px;
    // background: rgb(255, 255, 255);
    transition: box-shadow 500ms ease 0s;
    padding: 10px 35px;
    border-radius: 5px;
    color: black;
`;

export const P = styled.p`
    font-size: 16px;
    font-weight: 500;
    line-height: 25px;
    opacity: 0.9;
`;

export const Date = styled.h5`
    // color: rgb(11, 206, 175);
    font-size: 14px;
    letter-spacing: 2px;
`;
