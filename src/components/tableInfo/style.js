import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #aaaaaa;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #ffffff;
  }
  &:nth-child(even) {
    background-color: #dbf2f0;
  }
`;

export const TableCell = styled.td`
  width: 30%;
  border: 1px solid #aaaaaa;
  padding: 8px;
  text-align: left;
`;
