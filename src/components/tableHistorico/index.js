import React from "react";
// import {useParams} from "react-router-dom";
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
// const { id } = useParams();
const Historico = () => {
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
      </TableBody>
    </Table>
  );
}
export default Historico;