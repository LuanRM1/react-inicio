import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #001b34; // Substitua pelo código de cor real da sua barra lateral
  color: white;
  min-height: 100vh; // Altura total da tela
  width: 3%;
  padding: 20px;
`;

export const SidebarItem = styled.div`
  margin: 20px 0;
  cursor: pointer;

  &:hover {
    // Estilo para hover, se necessário
    color: #00f0dc; // Ou qualquer outra cor para o efeito hover
  }
`;

export const SidebarIcon = styled.div`
  font-size: 24px; // Ou o tamanho que desejar para os ícones
  // Você pode adicionar mais estilos para os ícones aqui
`;
