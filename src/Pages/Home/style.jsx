import styled from "styled-components";

export const CatalogoList = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  width: 100vw;
  justify-content: space-around;
  padding-top: 150px;
`;
export const CardBeer = styled.div`
  color: #ffd998;
  font-weight: bold;
  background-color: #80602b;
  height: 260px;
  width: 48%;
  border: 1px solid;
  margin: 0.5%;
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 700px) {
    width: 30%;
  }
`;

export const Image = styled.img`
  width: 50px;
`;
