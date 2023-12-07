import React, { useState } from "react";
import Map from "../../components/map"; // Importando da subpasta map
import Historico from "../../components/tableHistorico";
import Sidebar from "../../components/sideBar";
import Info from "../../components/tableInfo";
import { ScrollableTableContainer } from "../../components/scrollTable/style.js";
import Title from "../../components/title";
import {
  ButtonContainer,
  LeftContainer,
  PageContainer,
  RightContainer,
  HistConteiner,
} from "./style.js";
import ModalComponent from "../../components/modal";
import Button from "../../components/button";
import SubTitle from "../../components/subTitle/index.js";
const Mapping = () => {
  const [showModal, setShowModal] = useState(false);
  var value = null;
  // Definindo os campos que serão passados para o ModalComponent
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
      name: "Manutenção",
      label: "Manutenção",
      type: "text",
      placeholder: "Manutenção",
    },
    {
      name: "Vencimento",
      label: "Vencimento",
      type: "text",
      placeholder: "Vencimento",
    },
  ];
  const fields = [formFields, infoFields];
  return (
    <PageContainer>
      <Sidebar />
      <LeftContainer>
        <Title text={"Mapa"} />
        <Map />
      </LeftContainer>
      <RightContainer>
        <ModalComponent
          showModal={showModal}
          setShowModal={setShowModal}
          fields={fieldLi[value]}
          title="Informações de Entrega"
        />
        <HistConteiner>
          <SubTitle style={{ "font-size": "12px" }} text={"Histórico"} />
          <Button
            text={"add entrega"}
            onClick={() => setShowModal(true)}
            style={{
              width: "20%",
              height: "20px",
              "margin-bottom": 0,
              "margin-top": "7px",
              "font-size": "12px",
            }}
          />
        </HistConteiner>
        <ScrollableTableContainer>
          <Historico />
        </ScrollableTableContainer>
        <ScrollableTableContainer style={{ "overflow-y": "hidden" }}>
          <Info />
        </ScrollableTableContainer>
      </RightContainer>
    </PageContainer>
  );
};

export default Mapping;
