import React, { useState, useEffect } from "react";
import Map from "../../components/map"; // Importando da subpasta map
import Historico from "../../components/tableHistorico";
import Sidebar from "../../components/sideBar";
import Info from "../../components/tableInfo";
import { ScrollableTableContainer } from "../../components/scrollTable/style.js";
import { useParams } from "react-router-dom";
import { UpdateInfo } from "../../services/put/attInfo";
import { postDeliveryHistory } from "../../services/post/addEntrega.js";
import Title from "../../components/title";
import StatusModal from "../../components/stateModal/index.js";
import { UpdateStatus } from "../../services/put/attStatus.js";
import {
  LeftContainer,
  PageContainer,
  RightContainer,
  HistConteiner,
  ModalForm,
  InfoConteiner,
  UpperMap,
} from "./style.js";
import ModalComponent from "../../components/modal";
import Button from "../../components/button";
import SubTitle from "../../components/subTitle/index.js";

const Mapping = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeFormFields, setActiveFormFields] = useState([]);
  const [modalTitle, setModalTitle] = useState("");
  const { id } = useParams();
  const [isEntrega, setIsEntrega] = useState(false);
  const [isStatusModalVisible, setStatusModalVisible] = useState(false);
  const openStatusModal = () => setStatusModalVisible(true);

  const closeStatusModal = () => setStatusModalVisible(false);

  const handleStatusSubmit = async (statusData) => {
    try {
      console.log(statusData);
      const formData = statusData;
      const response = await UpdateStatus(id, formData); // Use o 'id' passado para o modal
      console.log(response); // Faça algo com a resposta, se necessário
      setShowModal(false);
    } catch (error) {
      console.error("Erro ao enviar o status da entrega:", error);
    }
  };

  const formFields = [
    {
      name: "destination",
      label: "Cidade de destino",
      type: "text",
      placeholder: "Cidade de destino",
    },
    {
      name: "issueDate",
      label: "Data de emissão",
      type: "text",
      placeholder: "Data de emissão",
    },
    {
      name: "deliveryDate",
      label: "Data de entrega",
      type: "text",
      placeholder: "Data de entrega",
    },
    {
      name: "reason",
      label: "Motivo",
      type: "text",
      placeholder: "Motivo",
    },
  ];

  const infoFields = [
    {
      name: "assetName",
      label: "Nome",
      type: "text",
      placeholder: "Nome",
    },
    {
      name: "price",
      label: "Preço",
      type: "text",
      placeholder: "Preço",
    },
    {
      name: "warranty",
      label: "Garantia",
      type: "text",
      placeholder: "Garantia",
    },
    {
      name: "maintenance",
      label: "Ultima Manutenção",
      type: "text",
      placeholder: "Ultima Manutenção",
    },
    {
      name: "expiration",
      label: "Vencimento",
      type: "text",
      placeholder: "Vencimento",
    },
  ];

  function handleAddEntregaClick() {
    setActiveFormFields(formFields);
    setModalTitle("Informações de Entrega");
    setIsEntrega(true); // Defina como true quando for o formulário de entrega
  }

  function handleAddInfoClick() {
    setActiveFormFields(infoFields);
    setModalTitle("Informações Adicionais");
    setIsEntrega(false); // Defina como false quando for o formulário de informações
  }

  useEffect(() => {
    if (activeFormFields.length > 0) {
      setShowModal(true);
    }
  }, [activeFormFields]);

  function handleEntregaSubmit(formData) {
    postDeliveryHistory(formData, id)
      .then((response) =>
        console.log("Entrega adicionada com sucesso:", response)
      )
      .catch((error) => console.error("Erro ao adicionar entrega:", error));
  }

  function handleInfoSubmit(formData) {
    // Lógica para enviar informações adicionais
    UpdateInfo(id, formData)
      .then((response) => console.log("Resposta:", response))
      .catch((error) => console.error("Erro:", error));
  }

  return (
    <PageContainer>
      <Sidebar />
      <LeftContainer>
        <Title text={"Dashboard"} />
        <UpperMap>
          <SubTitle style={{ fontSize: "12px" }} text={"Mapa"} />
          <Button
            text={"update ent"}
            onClick={openStatusModal}
            style={{
              width: "30%",
              height: "20px",
              marginBottom: 0,
              marginTop: "7px",
              fontSize: "12px",
            }}
          />
          <StatusModal
            showModal={isStatusModalVisible}
            setShowModal={closeStatusModal}
            onSubmit={handleStatusSubmit}
          />
        </UpperMap>
        <Map />
      </LeftContainer>
      <RightContainer>
        <ModalForm>
          <ModalComponent
            showModal={showModal}
            setShowModal={setShowModal}
            fields={activeFormFields}
            title={modalTitle}
            onSubmit={isEntrega ? handleEntregaSubmit : handleInfoSubmit}
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
