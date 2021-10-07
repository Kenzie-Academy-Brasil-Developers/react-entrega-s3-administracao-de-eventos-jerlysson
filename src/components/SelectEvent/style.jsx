import styled from "styled-components";

export const SelectBox = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 90vw;
  height: 75vh;
  background: #ffeed4ad;
  img {
    width: 65px;
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
