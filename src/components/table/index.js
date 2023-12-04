import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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

const DataTable = ({ data }) => {
  // function HandleClick(id) {
  //   const navigate = useNavigate();
  //   navigate(`/`);
  // }
  const navigate = useNavigate();
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>N°</TableHeader>
          <TableHeader>Nome do ativo</TableHeader>
          <TableHeader>Data de emissão</TableHeader>
          <TableHeader>Se</TableHeader>
          <TableHeader>Destino</TableHeader>
          <TableHeader>Data de entrega</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, index) => (
          <TableRow
            onClick={() => {
              navigate(`/dashboard/${row.id}`);
            }}
            key={index}
          >
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.assetName}</TableCell>
            <TableCell>{row.issueDate}</TableCell>
            <TableCell>
              <StatusIndicator color={statusColors[row.status]} />
            </TableCell>
            <TableCell>{row.destination}</TableCell>
            <TableCell>{row.deliveryDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
