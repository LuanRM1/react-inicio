import React from "react";
import { FiPlus, FiMenu, FiUser } from "react-icons/fi";
import { SidebarContainer, SidebarButton, SidebarIcon } from "./style";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarButton>
        <SidebarIcon>
          <FiMenu />
        </SidebarIcon>
      </SidebarButton>
      <SidebarButton>
        <SidebarIcon>
          <FiPlus />
        </SidebarIcon>
      </SidebarButton>
      <SidebarButton>
        <br></br>
        <br></br>
        <SidebarIcon>
          <FiUser />
        </SidebarIcon>
      </SidebarButton>
      {/* Adicionar mais botões conforme necessário */}
    </SidebarContainer>
  );
};

export default Sidebar;
