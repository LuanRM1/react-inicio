import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { entregaInfo } from "../../services/post/tabelaInfo";
import { Table, TableBody, TableRow, TableCell } from "./style.js";

const Info = () => {
  const { id } = useParams();
  const [infoData, setInfoData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await entregaInfo(id);
        console.log(response, "response");

        // Atualize esta linha conforme a estrutura da sua resposta
        setInfoData(response); // Se a resposta for diretamente um array
        // setHistoricoData(response.data); // Se a resposta for um objeto com uma propriedade 'data'
      } catch (error) {
        console.error("Erro ao buscar dados: ", error);
      }
    }

    fetchData();
  }, [id]);
  return (
    <Table
      style={{
        borderWidth: "1px",
        borderColor: "#aaaaaa",
        borderStyle: "solid",
      }}
    >
      <TableBody>
        {Array.isArray(infoData) &&
          infoData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>Nome</TableCell>
              <TableCell>{row.assetName}</TableCell>
            </TableRow>
          ))}
        {Array.isArray(infoData) &&
          infoData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>Preço</TableCell>
              <TableCell>{row.price}</TableCell>
            </TableRow>
          ))}
        {Array.isArray(infoData) &&
          infoData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>Garantia</TableCell>
              <TableCell>{row.warranty}</TableCell>
            </TableRow>
          ))}
        {Array.isArray(infoData) &&
          infoData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>Ultima Manutenção</TableCell>
              <TableCell>{row.maintenance}</TableCell>
            </TableRow>
          ))}
        {Array.isArray(infoData) &&
          infoData.map((row, index) => (
            <TableRow key={index}>
              <TableCell>Vencimento</TableCell>
              <TableCell>{row.expiration}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default Info;
