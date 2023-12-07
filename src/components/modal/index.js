// index.js
import React from "react";
import {
  ModalBackdrop,
  ModalContainer,
  Input,
  Label,
  CloseButton,
  ModalTitle,
} from "./style";

const ModalComponent = ({ showModal, setShowModal, fields, title }) => {
  return (
    showModal && (
      <ModalBackdrop onClick={() => setShowModal(false)}>
        console.log(showModal)
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={() => setShowModal(false)}>×</CloseButton>
          {title && <ModalTitle>{title}</ModalTitle>}{" "}
          {/* Adicionando o título */}
          {fields.map((field, index) => (
            <div key={index}>
              <Label htmlFor={field.name}>{field.label}</Label>
              <Input
                id={field.name}
                type={field.type}
                placeholder={field.placeholder}
                name={field.name}
              />
            </div>
          ))}
        </ModalContainer>
      </ModalBackdrop>
    )
  );
};

export default ModalComponent;
