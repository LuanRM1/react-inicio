import React from "react";
import Map from "../../components/map"; // Importando da subpasta map
import Historico from "../../components/tableHistorico";
import Sidebar from "../../components/sideBar";
import Info from "../../components/tableInfo";
import { ScrollableTableContainer } from "../../components/scrollTable/style.js";
import { LeftContainer, PageContainer, RightContainer } from "./style.js";
const Mapping = () => {
  return (
    <PageContainer>
      <LeftContainer>
        <Sidebar />
        <Map />
      </LeftContainer>
      <RightContainer>
        <ScrollableTableContainer>
          <Historico />
        </ScrollableTableContainer>
        <br></br>
        <br></br>
        <br></br>
        <ScrollableTableContainer>
          <Info />
        </ScrollableTableContainer>
      </RightContainer>
    </PageContainer>
  );
};

export default Mapping;
