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
import ModalComponent from "../../components/twoFormModal";
import Button from "../../components/button";
import { postDeliveryHistory } from "../../services/post/addEntrega.js";
import { addAtivo } from "../../services/post/addAtivo.js";
function DashBoard({ props }) {
  const [showModal, setShowModal] = useState(false);

  const formFieldsC1 = [
    {
      name: "id",
      label: "Identificador",
      type: "text",
      placeholder: "Indentificador",
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

  const formFieldsC2 = [
    {
      name: "assetName",
      label: "Nome",
      type: "text",
      placeholder: "Nome do ativo",
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
      name: "expiration",
      label: "Vencimento",
      type: "text",
      placeholder: "Vencimento",
    },
  ];
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSubmit = async (formDataC1) => {
    try {
      // Dados para o endpoint /addAtivo
      const ativoData = {
        id: formDataC1.id,
        assetName: formDataC1.assetName,
        price: formDataC1.price,
        warranty: formDataC1.warranty,
        expiration: formDataC1.expiration,
      };

      // Dados para o endpoint /addEntrega
      const entregaData = {
        id: formDataC1.id,
        issueDate: formDataC1.issueDate,
        destination: formDataC1.destination,
        deliveryDate: formDataC1.deliveryDate,
      };

      console.log("entregaa: ", entregaData, "info: ", ativoData);
      // Chama os serviços
      const ativoResponse = await addAtivo(ativoData);

      const entregaResponse = await postDeliveryHistory(
        entregaData,
        entregaData.id
      );

      console.log(ativoResponse, entregaResponse); // Trate as respostas conforme necessário

      setShowModal(false);
    } catch (error) {
      console.error("Erro ao enviar os formulários:", error);
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
        fieldsC1={formFieldsC1}
        fieldsC2={formFieldsC2}
        title={"Adicionar Ativo"}
        onSubmit={handleSubmit}
      />
      <Sidebar />
      <Content>
        <Title text={"Lista de ativos"} />
        <FilterConteiner>
          <DropdownFilter onFilterSelect={handleFilterSelect} />
          <SearchBarContainer>
            <Button
              text="Adicionar Ativos"
              onClick={() => setShowModal(true)}
              style={{
                width: "10%",
                height: "20px",
                marginBottom: 0,
                marginTop: "7px",
                marginRight: "10px",
                fontSize: "12px",
              }}
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
