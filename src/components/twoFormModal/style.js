// style.js
import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100000;
`;

export const ModalContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 60%;
  position: relative;
`;

export const Input = styled.input`
  width: 98%;
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export const Label = styled.label`
  display: block;
  margin-top: 20px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const ModalTitle = styled.h2`
  margin: 0;
  color: #333;
  text-align: center;
  // Adicione outros estilos conforme necessário
`;
export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%; // Aproximadamente metade da largura para caber dois lado a lado
  margin-right: 2%; // Espaço entre as seções de formulário, ajuste conforme necessário

  &:last-child {
    margin-right: 0; // Para garantir que o segundo FormSection não tenha margem à direita
  }
`;
