import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sideBar";
import Title from "../../components/title";
import { PageConteiner, Content } from "./style.js";
import DataTable from "../../components/table";
import { ScrollableTableContainer } from "../../components/scrollTable/style.js";
import { entregaAtivos } from "../../services/get/entregaAtivos"; // Importe a função aqui

function DashBoard({ props }) {
  const [data, setData] = useState([]); // Estado para armazenar os dados da API

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await entregaAtivos();
        setData(response); // Atualiza o estado com os dados recebidos
      } catch (error) {
        console.error("Erro ao buscar dados: ", error);
      }
    };

    fetchData();
  }, []); // Array de dependência vazio para rodar uma vez na montagem do componente

  return (
    <PageConteiner>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600&italic&display=swap"
        rel="stylesheet"
      />
      <Sidebar />
      <Content>
        <Title text={"Lista de ativos"} />
        <ScrollableTableContainer>
          <DataTable data={data} />
        </ScrollableTableContainer>
      </Content>
    </PageConteiner>
  );
}

export default DashBoard;
