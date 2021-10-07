import styled, { keyframes } from "styled-components";
const CountPosition = keyframes`
0% {
  opacity: 0;
 top: 5px;
}
75%{
  opacity: 1;
  top: -20px;
}
100%{
  top: -15px
}
`;
export const HeaderBox = styled.header`
  position: fixed;
  width: 100%;
  height: 150px;
  align-items: center;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  background-color: #d18b09;
`;
export const Menu = styled.div`
  position: relative;
  max-width: 1000px;
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  span {
    position: relative;
    cursor: pointer;
    font-size: 20px;
    :hover {
      border-bottom: 2px solid white;
    }
    div {
      background: lightblue;
      width: 20px;
      height: 20px;
      text-align: center;
      position: absolute;
      top: -10px;
      right: 0;
      animation: ${CountPosition} 0.5s both;
    }
  }
`;
