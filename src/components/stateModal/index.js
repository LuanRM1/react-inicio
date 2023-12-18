import React, { useState } from "react";
import {
  ModalBackdrop,
  ModalContainer,
  CloseButton,
  ModalTitle,
  OptionsContainer,
  OptionItem,
  Input,
  SaveButton,
} from "./style";

const StatusModal = ({ showModal, setShowModal, onSubmit }) => {
  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      await onSubmit({ status });
      setShowModal(false);
    } catch (error) {
      console.error("Erro ao enviar o status da entrega:", error);
    }
  };

  return (
    showModal && (
      <ModalBackdrop onClick={() => setShowModal(false)}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={() => setShowModal(false)}>×</CloseButton>
          <ModalTitle>Status da Entrega</ModalTitle>
          <OptionsContainer>
            <OptionItem>
              <Input
                type="radio"
                id="entregue"
                name="status"
                value="green"
                onChange={handleChange}
              />
              <label htmlFor="entregue">entregue</label>
            </OptionItem>
            <OptionItem>
              <Input
                type="radio"
                id="aCaminho"
                name="status"
                value="yellow"
                onChange={handleChange}
              />
              <label htmlFor="aCaminho">a caminho</label>
            </OptionItem>
            <OptionItem>
              <Input
                type="radio"
                id="naoEntregue"
                name="status"
                value="red"
                onChange={handleChange}
              />
              <label htmlFor="naoEntregue">não entregue</label>
            </OptionItem>
          </OptionsContainer>
          <SaveButton onClick={handleSubmit}>salvar</SaveButton>
        </ModalContainer>
      </ModalBackdrop>
    )
  );
};

export default StatusModal;
