import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sideBar";
import Title from "../../components/title";
import { PageConteiner, Content, SearchBarContainer } from "./style.js";
import DataTable from "../../components/table";
import { ScrollableTableContainer } from "../../components/scrollTable/style.js";
import { entregaAtivos } from "../../services/get/entregaAtivos";
import SearchBar from "../../components/searchBar";
import DropdownFilter from "../../components/filterButton";

function DashBoard({ props }) {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

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
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600&italic&display=swap"
        rel="stylesheet"
      />
      <Sidebar />
      <Content>
        <Title text={"Lista de ativos"} />
        <DropdownFilter onFilterSelect={handleFilterSelect} />
        <SearchBarContainer>
          <SearchBar
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchBarContainer>
        <ScrollableTableContainer>
          <DataTable data={filteredData} />
        </ScrollableTableContainer>
      </Content>
    </PageConteiner>
  );
}

export default DashBoard;
