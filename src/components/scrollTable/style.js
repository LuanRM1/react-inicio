import styled from "styled-components";

export const ScrollableTableContainer = styled.div`
  overflow-y: auto;
  max-height: 500px; // Ajuste para a altura desejada da tabela

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
