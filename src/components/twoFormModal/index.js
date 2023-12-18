import React, { useState } from "react";
import {
  ModalBackdrop,
  ModalContainer,
  Input,
  Label,
  CloseButton,
  ModalTitle,
  FormSection, // Supondo que FormSection é um componente de estilo que você precisa criar
} from "./style";
import Button from "../button";

const ModalComponent = ({
  showModal,
  setShowModal,
  fieldsC1,
  fieldsC2,
  title,
  onSubmit,
}) => {
  const initialFormStateC1 = fieldsC1.reduce(
    (acc, field) => ({ ...acc, [field.name]: "" }),
    {}
  );

  const initialFormStateC2 = fieldsC2.reduce(
    (acc, field) => ({ ...acc, [field.name]: "" }),
    {}
  );

  const [formDataC1, setFormDataC1] = useState(initialFormStateC1);
  const [formDataC2, setFormDataC2] = useState(initialFormStateC2);

  const handleChangeC1 = (event) => {
    const { name, value } = event.target;
    setFormDataC1((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleChangeC2 = (event) => {
    const { name, value } = event.target;
    setFormDataC2((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await onSubmit({ ...formDataC1, ...formDataC2 });
      setShowModal(false);
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
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {/* Formulário C1 */}
            <FormSection>
              {fieldsC1.map((field, index) => (
                <div key={index}>
                  <Label htmlFor={field.name}>{field.label}</Label>
                  <Input
                    onChange={handleChangeC1}
                    id={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    name={field.name}
                    value={formDataC1[field.name] || ""}
                  />
                </div>
              ))}
            </FormSection>

            {/* Formulário C2 */}
            <FormSection>
              {fieldsC2.map((field, index) => (
                <div key={index}>
                  <Label htmlFor={field.name}>{field.label}</Label>
                  <Input
                    onChange={handleChangeC2}
                    id={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    name={field.name}
                    value={formDataC2[field.name] || ""}
                  />
                </div>
              ))}
            </FormSection>
          </div>
          <Button
            text="Enviar"
            onClick={handleSubmit}
            style={{
              width: "100%", // ajustado para 100% para que o botão fique com a largura total do container
              backgroundColor: "#008277", // cor de fundo
              color: "#fff",
              height: "40px",
              marginTop: "20px", // adiciona um pouco de espaço acima do botão
            }}
          />
        </ModalContainer>
      </ModalBackdrop>
    )
  );
};

export default ModalComponent;
