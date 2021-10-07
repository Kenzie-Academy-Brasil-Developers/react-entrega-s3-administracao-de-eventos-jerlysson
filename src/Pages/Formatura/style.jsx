import styled from "styled-components";

export const DivForma = styled.div`
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    font-weight: bold;
    color: #4a4aed;
    cursor: pointer;
  }
`;

export const SectionF = styled.section`
  width: 90%;
  margin: 0 auto;
  div {
    margin: 5px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid;
  }
`;

export const BtnF = styled.button`
  background-color: #fd8300;
  font-weight: bold;
  max-height: 25px;
  :hover {
    background-color: #4a4aed;
    color: #fd8300;
  }
`;
