import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #001b34;
  color: white;
  min-height: 100vh;
  width: 3%;
  padding: 20px;
`;

export const SidebarButton = styled.button`
  background-color: transparent;
  border: none;
  color: inherit;
  font-size: 24px;
  cursor: pointer;
  margin: 20px 0;
  padding: 10px;

  &:hover {
    color: #00f0dc;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const SidebarIcon = styled.div`
  // Estilos adicionais para o ícone, se necessário
`;
