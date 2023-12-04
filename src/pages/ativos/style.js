import styled from "styled-components";

export const PageConteiner = styled.div`
  width: 100%;
  display: flex;

  background-color: #fff;
`;

export const Content = styled.main`
  width: 100%;
  padding-left: 8%;
  padding-top: 2%;
`;

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center; // Alinha a barra de pesquisa à direita
  height: 2%;
  width: 83%;
  padding-bottom: 2%;

  @media (max-width: 768px) {
    // Se você precisar de responsividade
    justify-content: center; // Centraliza em telas menores
  }
`;

export const FilterConteiner = styled.div`
  display: flex;
  width: 100%;
`;
