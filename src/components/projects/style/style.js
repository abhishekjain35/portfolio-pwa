import styled from "@emotion/styled";

export const Header = styled.div`
  text-align: center;
  padding-top: 30px;
  padding-bottom: 10px;
  @media (max-width: 900px) {
    padding-top: 60px;
    padding-bottom: 0;
  }
  & > h2 {
    font-family: MyWebFont, sans-serif;
    display: inline-block;
    font-weight: normal;
    font-size: 35px;
    @media (max-width: 900px) {
      font-size: 30px;
    }
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
  background-color: #2a2a2a;
  width: 30%;
  box-shadow: rgba(0, 0, 0, 0.082) 0px 0px 10px 0px;
  transition: box-shadow 500ms ease 0s;
  overflow-wrap: break-word;
  margin: 20px 40px;
  padding: 10px 35px;
  border-radius: 5px;
  color: white;
  @media (max-width: 1200px) {
    width: 40%;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 25px;
    margin: 20px 20px;
  }
  & > h2 {
    font-family: MyWebFont, sans-serif;
    display: inline-block;
    font-weight: normal;
    font-size: 26px;
    letter-spacing: 1px;
    color: #ff2253;
  }
`;

export const P = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 25px;
  /* color: #ababab; */
  font-family: "Rubik", sans-serif;
  letter-spacing: 0.3px;
`;

export const Date = styled.h5`
  font-size: 14px;
  margin-top: 5px;
  /* color: #ababab; */
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
