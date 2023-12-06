import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { entregaInfo } from "../../services/post/tabelaInfo";
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableHeader,
    TableCell,
  } from "./style.js";

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
        <Table>
          <TableHead>
            <TableRow>
              <TableHeader>Nome</TableHeader>
              <TableHeader>Preço</TableHeader>
              <TableHeader>Garantia</TableHeader>
              <TableHeader>Manutenção</TableHeader>
              <TableHeader>Vencimento</TableHeader>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(infoData) &&
              infoData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.nome}</TableCell>
                  <TableCell>{row.preço}</TableCell>
                  <TableCell>{row.garantia}</TableCell>
                  <TableCell>{row.manutencao}</TableCell>
                  <TableCell>{row.vencimento}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      );
    };
    
    export default Info;