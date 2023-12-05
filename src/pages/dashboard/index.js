import React from 'react';
import Map from '../../components/map'; // Importando da subpasta map
import Sidebar from "../../components/sideBar";
import {LeftContainer} from "./style.js";
const Mapping = () => {

  return (
    <LeftContainer>
      <Sidebar/>
      <Map />
    </LeftContainer>
  );
};

export default Mapping;