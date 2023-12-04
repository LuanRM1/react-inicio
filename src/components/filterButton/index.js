import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  StatusIndicator,
} from "./style";

const statusColors = [
  {
    color: "Todos",
    code: "#000000",
  },
  {
    color: "Verde",
    code: "#4CAF50",
  },
  {
    color: "Vermelho",
    code: "#F44336",
  },
  {
    color: "Amarelo",
    code: "#FFEB3B",
  },
];

const DropdownFilter = ({ onFilterSelect }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(
    <StatusIndicator color="black" />
  );

  const toggleDropdown = () => {
    console.log("Dropdown toggle clicked!");
    setDropdownOpen(!dropdownOpen);
  };

  const handleFilterClick = (filterName) => {
    setSelectedFilter(<StatusIndicator color={filterName.code} />);
    onFilterSelect(filterName.color);
    setDropdownOpen(false); // Isso fechará o menu dropdown após a seleção
  };

  return (
    <Dropdown>
      <DropdownToggle onClick={toggleDropdown}>{selectedFilter}</DropdownToggle>
      {dropdownOpen && (
        <DropdownMenu>
          {statusColors.map((color, index) => {
            return (
              <DropdownItem
                key={index}
                onClick={() => handleFilterClick(color)}
              >
                <StatusIndicator color={color.code} />
              </DropdownItem>
            );
          })}
        </DropdownMenu>
      )}
    </Dropdown>
  );
};

export default DropdownFilter;
