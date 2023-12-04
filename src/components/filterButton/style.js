import styled from "styled-components";

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownToggle = styled.button`
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 20px;
  background-color: #fff;
  position: relative; // Adicione esta linha

  // Utilize os pseudo-elementos para criar a seta (caret)
  &:after {
    content: "";
    position: absolute; // Absolute em relação ao botão
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    border-top: 5px solid #333;
    border-right: 5px solid transparent;
    border-left: 5px solid transparent;
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1000;

  // O DropdownMenu é exibido com base no estado dropdownOpen no componente
  ${Dropdown}:hover & {
    display: block;
  }
`;

export const DropdownItem = styled.div`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #f1f1f1;
  }
`;
