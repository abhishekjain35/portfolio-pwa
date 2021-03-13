import styled from "@emotion/styled";

export const HomeContainer = styled.section`
  width: 95%;
  height: 100vh;
  padding-left: 70px;
  display: flex;
  flex-direction: column;
  @media (max-width: 900px){
    padding: 70px 0 0 10px;
  }
`;

export const UpperTags = styled.header`
  display: flex;
  align-items: flex-end;
  font-family: "La Belle Aurore", cursive;
  flex: 1 1 13%;
  color: #515152;
`;

export const BottomTags = styled.footer`
  font-family: "La Belle Aurore", cursive;
  flex: 1 1 10%;
  color: #515152;
`;
