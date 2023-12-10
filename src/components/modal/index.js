// ModalComponent.js
import React, { useState } from "react";
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
  onSubmit,
}) => {
  const initialFormState = fields.reduce(
    (acc, field) => ({ ...acc, [field.name]: "" }),
    {}
  );
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await onSubmit(formData); // Chama a função de envio passada como prop
      setShowModal(false); // Opcional: fechar o modal após o envio
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
    }
  };

  return (
    showModal && (
      <ModalBackdrop onClick={() => setShowModal(false)}>
        <ModalContainer onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={() => setShowModal(false)}>×</CloseButton>
          {title && <ModalTitle>{title}</ModalTitle>}
          {fields.map((field, index) => (
            <div key={index}>
              <Label htmlFor={field.name}>{field.label}</Label>
              <Input
                onChange={handleChange}
                id={field.name}
                type={field.type}
                placeholder={field.placeholder}
                name={field.name}
                value={formData[field.name] || ""}
              />
            </div>
          ))}
          <Button
            text="Enviar"
            onClick={handleSubmit}
            style={{
              width: "100%", // ajustado para 100% para que o botão fique com a largura total do container
              backgroundColor: "#008277", // propriedade corrigida para camelCase
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
