import React from "react";
import { useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { SidebarContainer, SidebarButton, SidebarIcon } from "./style";
import logosidebar from "../../assets/logosidebar.svg";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <SidebarContainer>
      <SidebarButton onClick={() => {
              navigate(`/ativos`);
            }}>
        <SidebarIcon>
        <img src={logosidebar} />
        </SidebarIcon>
      </SidebarButton>
      <SidebarButton onClick={() => {
              navigate(`/`);
            }}>
        <SidebarIcon>
          <FiUser />
        </SidebarIcon>
      </SidebarButton>
      {/* Adicionar mais botões conforme necessário */}
    </SidebarContainer>
  );
};

export default Sidebar;
