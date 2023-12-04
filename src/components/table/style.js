import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  a {
    color: #001b34;
    text-decoration: none;
    display: block;
  }
`;

export const TableHead = styled.thead`
  /* Estilos para o cabeçalho da tabela */
  background-color: #001b34;
  color: white;
  height: 6%;
`;

export const TableBody = styled.tbody`
  /* Estilos para o corpo da tabela */
`;
export const TableRow = styled.tr`
  cursor: pointer;
  &:not(:last-child) {
    border-bottom: 1px solid #ddd; // Para linhas entre as linhas da tabela
  }
  &:nth-child(even) {
    background-color: rgba(47, 177, 167, 0.3);
  }
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 8px; // Ajuste conforme necessário
  /* Estilos adicionais para o cabeçalho */
`;

export const TableCell = styled.td`
  text-align: left;
  position: relative;
  padding: 8px; // Ajuste conforme necessário
  border-bottom: 1px solid #ddd; // Para linhas horizontais
  border-right: 1px solid #a7a7a7;
  z-index: 1;
  background-color: transparent; // Para linhas verticais
  /* Estilos adicionais para células */
`;

export const StatusIndicator = styled.span`
  height: 20px;
  width: 20px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: inline-block;
`;
