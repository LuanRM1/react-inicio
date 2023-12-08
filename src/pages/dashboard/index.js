import React, { useState } from "react";
import Map from "../../components/map"; // Importando da subpasta map
import Historico from "../../components/tableHistorico";
import Sidebar from "../../components/sideBar";
import Info from "../../components/tableInfo";
import { ScrollableTableContainer } from "../../components/scrollTable/style.js";
import Title from "../../components/title";
import {
  LeftContainer,
  PageContainer,
  RightContainer,
  HistConteiner,
  ModalForm,
  infoConteiner,
  InfoConteiner,
} from "./style.js";
import ModalComponent from "../../components/modal";
import Button from "../../components/button";
import SubTitle from "../../components/subTitle/index.js";

const Mapping = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeFormFields, setActiveFormFields] = useState([]);
  const [modalTitle, setModalTitle] = useState("");

  const formFields = [
    {
      name: "Cidade de destino",
      label: "Cidade de destino",
      type: "text",
      placeholder: "Cidade de destino",
    },
    {
      name: "Data de emissão",
      label: "Data de emissão",
      type: "text",
      placeholder: "Data de emissão",
    },
    {
      name: "Data de entrega",
      label: "Data de entrega",
      type: "text",
      placeholder: "Data de entrega",
    },
    {
      name: "Motivo",
      label: "Motivo",
      type: "text",
      placeholder: "Motivo",
    },
    // Adicione mais campos conforme necessário
  ];

  const infoFields = [
    {
      name: "Nome",
      label: "Nome",
      type: "text",
      placeholder: "Nome",
    },
    {
      name: "Preço",
      label: "Preço",
      type: "text",
      placeholder: "Preço",
    },
    {
      name: "Garantia",
      label: "Garantia",
      type: "text",
      placeholder: "Garantia",
    },
    {
      name: "Ultima Manutenção",
      label: "Ultima Manutenção",
      type: "text",
      placeholder: "Ultima Manutenção",
    },
    {
      name: "Vencimento",
      label: "Vencimento",
      type: "text",
      placeholder: "Vencimento",
    },
  ];

  function buttonFunc() {
    // Lógica para enviar os dados do formulário
    console.log("Dados do formulário enviados");
  }

  function handleAddEntregaClick() {
    setActiveFormFields(formFields);
    setModalTitle("Informações de Entrega"); // Atualiza o título para entrega
    setShowModal(true);
  }

  function handleAddInfoClick() {
    setActiveFormFields(infoFields);
    setModalTitle("Informações Adicionais"); // Atualiza o título para informações adicionais
    setShowModal(true);
  }

  return (
    <PageContainer>
      <Sidebar />
      <LeftContainer>
        <Title text={"Mapa"} />
        <Map />
      </LeftContainer>
      <RightContainer>
        <ModalForm>
          <ModalComponent
            showModal={showModal}
            setShowModal={setShowModal}
            fields={activeFormFields}
            title={modalTitle} // Usa o estado modalTitle para o título
            buttonFunc={buttonFunc}
          />
        </ModalForm>
        <HistConteiner>
          <SubTitle style={{ fontSize: "12px" }} text={"Histórico do ativo"} />
          <Button
            text={"add entrega"}
            onClick={handleAddEntregaClick}
            style={{
              width: "20%",
              height: "20px",
              marginBottom: 0,
              marginTop: "7px",
              fontSize: "12px",
            }}
          />
        </HistConteiner>
        <ScrollableTableContainer>
          <Historico />
        </ScrollableTableContainer>
        <InfoConteiner>
          <SubTitle
            style={{ fontSize: "12px" }}
            text={"Informações do Ativo"}
          />
          <Button
            text={"add info"}
            onClick={handleAddInfoClick}
            style={{
              width: "20%",
              height: "20px",
              marginBottom: 0,
              marginTop: "7px",
              fontSize: "12px",
            }}
          />
        </InfoConteiner>
        <ScrollableTableContainer style={{ overflowY: "hidden" }}>
          <Info />
        </ScrollableTableContainer>
      </RightContainer>
    </PageContainer>
  );
};

export default Mapping;
