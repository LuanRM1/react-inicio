import React from "react";
import {useParams} from "react-router-dom";
import { entregaHistorico } from "../../services/post/tabelaHistorico";
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableHeader,
    TableCell,
    StatusIndicator,
  } from "./style.js";
const statusColors = {
    green: "#4CAF50",
    red: "#F44336",
    yellow: "#FFEB3B",
  };
const { id } = useParams();
const historico = ({ data}) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>SE</TableHeader>
          <TableHeader>d. emissão</TableHeader>
          <TableHeader>d. entrega</TableHeader>
          <TableHeader>destino</TableHeader>
          <TableHeader>motivo</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, index) => (
          <TableRow
            key={index}
          >
            <TableCell><StatusIndicator color={statusColors[row.status]} />
            </TableCell>
            <TableCell>{row.issueDate}</TableCell>
            <TableCell>{row.deliveryDate}</TableCell>
            <TableCell>{row.destination} </TableCell>
            <TableCell>{row.reason}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
export default historico;