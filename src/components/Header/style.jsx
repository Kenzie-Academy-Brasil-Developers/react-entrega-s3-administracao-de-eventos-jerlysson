import styled from "styled-components";

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
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  span {
    cursor: pointer;
    font-size: 20px;
    :hover {
      border-bottom: 2px solid white;
    }
  }
`;
