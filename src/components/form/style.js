import styled from "styled-components";
export const FormConteiner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormWrapper = styled.form`
  width: 50%;
  height: 10%;
  border-radius: 10px;
`;

export const FormInput = styled.input`
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #fff;
  border-radius: 10px;
  width: 100%;
  height: 35px;
  box-sizing: border-box;
  &::placeholder {
    color: #00f0dc; // Cor do texto do placeholder
    font-family: "Inter", sans-serif; // Estilo da fonte do placeholder
  }
  color: #fff; // Cor do texto digitado
  padding-left: 10px; // Distância do texto do placeholder até a borda
`;

export const FormButton = styled.button`
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 10px;
  width: 100%;
  height: 35px;
  margin-top: 10px;
  color: #001b34;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: #ebebeb; // Cor de fundo ao passar o mouse
    border-color: #ddd; // Cor da borda ao passar o mouse
  }

  &:focus {
    outline: none; // Remover contorno padrão
    box-shadow: 0 0 0 2px #001b34; // Adicionar um box-shadow para foco
  }
`;

export const ErrorMsg = styled.small`
  color: #ff6f91;
  font-family: "Inter", sans-serif;
  padding-left: 10px;
`;
