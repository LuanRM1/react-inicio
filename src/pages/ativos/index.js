import React from "react";
import Sidebar from "../../components/sideBar";
import Title from "../../components/title";
import { PageConteiner, Content } from "./style.js";
import DataTable from "../../components/table";

import TableScroll from "../../components/scrollTable";
import { ScrollableTableContainer } from "../../components/scrollTable/style.js";
const exampleData = [
  {
    number: 1,
    assetName: "Ativo 1",
    issueDate: "2023-01-01",
    status: "green",
    destination: "Destino 1",
    deliveryDate: "2023-01-10",
  },
  {
    number: 1,
    assetName: "Ativo 1",
    issueDate: "2023-01-01",
    status: "green",
    destination: "Destino 1",
    deliveryDate: "2023-01-10",
  },
  // mais objetos de dados...
];

function DashBoard({ props }) {
  return (
    <PageConteiner>
      <Sidebar />
      <Content>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600&italic&display=swap"
          rel="stylesheet"
        />
        <Title text={"Lista de ativos"} />
        <ScrollableTableContainer>
          <DataTable data={exampleData} />
        </ScrollableTableContainer>
      </Content>
    </PageConteiner>
  );
}

export default DashBoard;
