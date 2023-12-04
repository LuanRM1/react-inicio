import styled from "styled-components";

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
`;

export const DropdownToggle = styled.button`
  padding-right: 100%;
  padding-top: 20%;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 20px;
  background-color: #fff;
  position: relative; // Adicione esta linha
  box-sizing: border-box;

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
  min-width: 20%;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  border-radius: 20px;

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

export const StatusIndicator = styled.span`
  height: 20px;
  width: 20px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: inline-block;
`;
