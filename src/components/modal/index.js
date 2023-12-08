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
import Button from "../../components/button";

const ModalComponent = ({
  showModal,
  setShowModal,
  fields,
  title,
  buttonFunc,
}) => {
  return (
    showModal && (
      <ModalBackdrop onClick={() => setShowModal(false)}>
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
          <Button
            text={"Enviar"}
            onClick={buttonFunc}
            style={{
              width: "102%",
              "background-color": "#008277",
              color: "#fff",
              height: "40px",
            }}
          />
        </ModalContainer>
      </ModalBackdrop>
    )
  );
};

export default ModalComponent;
