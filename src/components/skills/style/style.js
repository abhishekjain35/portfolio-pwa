import styled from "@emotion/styled";

// export const P = styled.p`
//     margin: 0px;
//     padding-top: ${({ padd }) => (padd ? padd : "30px")};
//     font-size: 17px;
//     line-height: 30px;
//     width: 90%;
//     @media (max-width: 1150px) {
//         width: 100%;
//     }
// `;

// export const HomeContainer = styled.div`
//     color: white;
//     height: 93%;
//     /* top: 5%; */
//     width: 93%;
//     /* left: 60px; */
//     /* position: absolute; */
//     @media (max-width: 900px) {
//         top: 10%;
//         left: 3%;
//         height: 90%;
//     }
//     display: flex;
//     flex-direction: column;
//     padding-left: 60px;
// `;

// export const BodySpan = styled.span`
//     position: absolute;
//     font-family: "La Belle Aurore", cursive;
//     color: #515152;
//     left: 10px;
// `;

// export const BottomTags = styled.span`
//     color: #515152;
//     position: absolute;
//     bottom: 0;
//     left: 10px;
//     font-size: 18px;
//     font-family: "La Belle Aurore", cursive;
// `;

// export const MainContainer = styled.div`
//     left: 5%;
//     top: 30%;
//     width: 90%;
//     height: 90%;
//     position: absolute;
//     @media (max-width: 1150px) {
//         width: 90%;
//     }
//     @media (max-width: 900px) {
//         left: 10%;
//         width: 90%;
//         overflow-y: scroll;
//         height: 70%;
//     }
//     @media (max-width: 350px) {
//         top: 15%;
//     }

//     scrollbar-width: none;
//     scroll-behavior: smooth;
// `;

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
