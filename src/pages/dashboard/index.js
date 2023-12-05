import React from 'react';
import Map from '../../components/map'; // Importando da subpasta map
import Sidebar from "../../components/sideBar";
import Historico from '../../components/tableHistorico';
import {LeftContainer,PageContainer,RightContainer} from "./style.js";
const Mapping = () => {

  return (
    <PageContainer>
    <LeftContainer>
      <Sidebar/>
      <Map />
    </LeftContainer>
    <RightContainer>
      <Historico />
    </RightContainer>
    </PageContainer>
  );
};

export default Mapping;