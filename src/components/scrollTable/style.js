import styled from "styled-components";

export const ScrollableTableContainer = styled.div`
  overflow-y: auto;
  max-height: 40%; // ou a altura que você quer que a tabela tenha
  box-sizing: border-box;
  width: 85%;
  padding: 0 1% 1% 0;

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
