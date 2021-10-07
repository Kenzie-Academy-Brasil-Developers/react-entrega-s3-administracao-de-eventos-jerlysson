import styled, { keyframes } from "styled-components";
const BoxPosition = keyframes`
 0%{
   top: -200px
 }
 100%{
   top: 150px
 }
`;

export const SelectBox = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  height: 75vh;
  background: #ffeed4ad;
  animation: ${BoxPosition} 0.5s both;
  img {
    width: 65px;
  }
  @media (min-width: 700px) {
    width: 70%;
  }
`;
export const Close = styled.span`
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
`;
export const DivDesc = styled.div`
  height: 60px;
  overflow: auto;
`;
export const DivBtn = styled.div`
  margin-bottom: 7px;
  width: 100%;
`;
export const BtnAdd = styled.button`
  cursor: pointer;
  height: 30px;
  width: 33.3%;
  padding: 5px;
  font-size: 10px;
  border: 1px solid;
  color: white;
  font-weight: bold;
  background-color: #4a4aed;
  :hover {
    background-color: #fd8300;
    color: #4a4aed;
  }
`;
