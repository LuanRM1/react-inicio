import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "./style";

const DropdownFilter = ({ onFilterSelect }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("Todos");

  const toggleDropdown = () => {
    console.log("Dropdown toggle clicked!");
    setDropdownOpen(!dropdownOpen);
  };

  const handleFilterClick = (filterName) => {
    setSelectedFilter(filterName);
    onFilterSelect(filterName);
    setDropdownOpen(false); // Isso fechará o menu dropdown após a seleção
  };

  return (
    <Dropdown>
      <DropdownToggle onClick={toggleDropdown}>{selectedFilter}</DropdownToggle>
      {dropdownOpen && (
        <DropdownMenu>
          <DropdownItem onClick={() => handleFilterClick("Todos")}>
            Todos
          </DropdownItem>
          <DropdownItem onClick={() => handleFilterClick("Verde")}>
            Verde
          </DropdownItem>
          <DropdownItem onClick={() => handleFilterClick("Vermelho")}>
            Vermelho
          </DropdownItem>
          <DropdownItem onClick={() => handleFilterClick("Amarelo")}>
            Amarelo
          </DropdownItem>
        </DropdownMenu>
      )}
    </Dropdown>
  );
};

export default DropdownFilter;
