import styled from "styled-components";

export const ScrollableTableContainer = styled.div`
  overflow-y: auto;
  max-height: 500px; // ou a altura que você quer que a tabela tenha
  margin-bottom: 20px; // Adicione espaço abaixo da tabela, se necessário

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
