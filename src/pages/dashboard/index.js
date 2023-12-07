import React from "react";
import Map from "../../components/map"; // Importando da subpasta map
import Historico from "../../components/tableHistorico";
import Sidebar from "../../components/sideBar";
import Info from "../../components/tableInfo";
import { ScrollableTableContainer } from "../../components/scrollTable/style.js";
import Title from "../../components/title";
import { LeftContainer, PageContainer, RightContainer } from "./style.js";
const Mapping = () => {
  return (
    <PageContainer>
      <Sidebar />
      <LeftContainer>
        <Title text={"Mapa"} />
        <Map />
      </LeftContainer>
      <RightContainer>
        <ScrollableTableContainer>
          <Historico />
        </ScrollableTableContainer>
        <ScrollableTableContainer>
          <Info />
        </ScrollableTableContainer>
      </RightContainer>
    </PageContainer>
  );
};

export default Mapping;
