import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sideBar";
import Title from "../../components/title";
import {
  PageConteiner,
  Content,
  SearchBarContainer,
  FilterConteiner,
} from "./style.js";
import DataTable from "../../components/table";
import { ScrollableTableContainer } from "../../components/scrollTable/style.js";
import { entregaAtivos } from "../../services/get/entregaAtivos";
import SearchBar from "../../components/searchBar";
import DropdownFilter from "../../components/filterButton";
import ModalComponent from "../../components/modal";
import Button from "../../components/button";
import { postDeliveryHistory } from "../../services/post/addEntrega.js";
function DashBoard({ props }) {
  const [showModal, setShowModal] = useState(false);

  // Função para abrir o modal
  const handleOpenModal = () => setShowModal(true);
  const formFields = [
    {
      name: "id",
      label: "id",
      type: "text",
      placeholder: "Indentificador",
    },
    {
      name: "assetName",
      label: "Nome do ativo",
      type: "text",
      placeholder: "Nome do ativo",
    },
    {
      name: "issueDate",
      label: "Data de emissão",
      type: "text",
      placeholder: "Data de emissão",
    },
    {
      name: "destination",
      label: "Cidade de destino",
      type: "text",
      placeholder: "Cidade de destino",
    },
    {
      name: "deliveryDate",
      label: "Data de entrega",
      type: "text",
      placeholder: "Data de entrega",
    },
  ];

  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleModalSubmit = async (formData) => {
    try {
      // Cria um novo objeto com os dados do formulário e define o status para 'red'
      const dataToSend = { ...formData, status: "red" };
      console.log(dataToSend);

      // Envia os dados para o servidor
      const response = await postDeliveryHistory(dataToSend);
      console.log(response); // Faça algo com a resposta, como atualizar a lista de ativos

      // Fecha o modal após o envio bem-sucedido
      setShowModal(false);
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      // Aqui você pode mostrar uma mensagem de erro para o usuário
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await entregaAtivos();
        setData(response);
        setFilteredData(response); // Inicializa os dados filtrados
      } catch (error) {
        console.error("Erro ao buscar dados: ", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const filterData = () => {
      if (searchQuery !== "") {
        const filtered = data.filter((item) => {
          return Object.values(item)
            .join(" ")
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        });
        setFilteredData(filtered);
      } else {
        setFilteredData(data);
      }
    };

    filterData();
  }, [searchQuery, data]);

  const handleFilterSelect = (filterName) => {
    if (filterName === "Todos") {
      setFilteredData(data);
    } else {
      const filterColor =
        filterName === "Verde"
          ? "green"
          : filterName === "Vermelho"
          ? "red"
          : "yellow";
      const filtered = data.filter((item) => item.status === filterColor);
      setFilteredData(filtered);
    }
  };

  return (
    <PageConteiner>
      <ModalComponent
        showModal={showModal}
        setShowModal={setShowModal}
        fields={formFields}
        title={"Adicionar Ativo"}
        onSubmit={handleModalSubmit} // Passando a função de envio para o modal
      />

      <Sidebar />
      <Content>
        <Title text={"Lista de ativos"} />
        <FilterConteiner>
          <DropdownFilter onFilterSelect={handleFilterSelect} />
          <SearchBarContainer>
            <Button
              text="Adicionar Entrega"
              onClick={() => setShowModal(true)}
            />
            <SearchBar
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchBarContainer>
        </FilterConteiner>
        <ScrollableTableContainer>
          <DataTable data={filteredData} />
        </ScrollableTableContainer>
      </Content>
    </PageConteiner>
  );
}

export default DashBoard;
