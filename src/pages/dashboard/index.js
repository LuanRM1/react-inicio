import React from 'react';
import Map from '../../components/map'; // Importando da subpasta map
import Sidebar from "../../components/sideBar";
import historico from '../../components/tableHistorico';
import {LeftContainer,RightContainer} from "./style.js";
const Mapping = () => {

  return (
    <div>
    <LeftContainer>
      <Sidebar/>
      <Map />
    </LeftContainer>
    <RightContainer>
      <historico/>
    </RightContainer>
    </div>
  );
};

export default Mapping;