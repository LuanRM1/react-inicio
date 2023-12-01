import React from "react";

import { FiPlus, FiMenu, FiUser } from "react-icons/fi";

import { SidebarContainer, SidebarItem, SidebarIcon } from "./style";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarItem>
        <SidebarIcon>
          <FiMenu />
        </SidebarIcon>
      </SidebarItem>
      <SidebarItem>
        <SidebarIcon>
          <FiPlus />
        </SidebarIcon>
      </SidebarItem>
      <SidebarItem>
        <SidebarIcon>
          <FiUser />
        </SidebarIcon>
      </SidebarItem>
      {/* Adicionar mais itens conforme necessário */}
    </SidebarContainer>
  );
};

export default Sidebar;
