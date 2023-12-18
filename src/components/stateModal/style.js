import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 1040;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1050;
  background: white;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  min-width: 400px; // Or set to whatever width you prefer
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  background: transparent;
  font-size: 21px;
  cursor: pointer;
`;

export const ModalTitle = styled.h3`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const OptionItem = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;
`;

export const Input = styled.input`
  margin-right: 5px;
`;

export const SaveButton = styled.button`
  background-color: #008277;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  width: auto;
  height: 40px;
  align-self: flex-end;
`;
