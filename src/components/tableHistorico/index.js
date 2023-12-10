import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

const Historico = () => {
  const { id } = useParams();
  const [historicoData, setHistoricoData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await entregaHistorico(id);
        console.log(response, "response");

        // Atualize esta linha conforme a estrutura da sua resposta
        setHistoricoData(response); // Se a resposta for diretamente um array
        // setHistoricoData(response.data); // Se a resposta for um objeto com uma propriedade 'data'
      } catch (error) {
        console.error("Erro ao buscar dados: ", error);
      }
    }

    fetchData();
  }, [id]);

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>Status</TableHeader>
          <TableHeader>Data de Emissão</TableHeader>
          <TableHeader>Data de Entrega</TableHeader>
          <TableHeader>Destino</TableHeader>
          <TableHeader>Motivo</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {Array.isArray(historicoData) &&
          historicoData
            .slice() // Cria uma cópia para não modificar o estado original
            .reverse() // Inverte a ordem do array
            .map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  <StatusIndicator color={statusColors[row.status]} />
                </TableCell>
                <TableCell>{row.issueDate}</TableCell>
                <TableCell>{row.deliveryDate}</TableCell>
                <TableCell>{row.destination}</TableCell>
                <TableCell>{row.reason}</TableCell>
              </TableRow>
            ))}
      </TableBody>
    </Table>
  );
};

export default Historico;
