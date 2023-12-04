import React from "react";
import { SearchInput } from "./style";

const SearchBar = ({ value, onChange }) => {
  return (
    <SearchInput
      type="text"
      placeholder="Pesquisar ativo"
      value={value}
      onChange={onChange}
    />
  );
};

export default SearchBar;
