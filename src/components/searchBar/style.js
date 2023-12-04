import styled from "styled-components";

export const SearchInput = styled.input`
  max-height: 5px;
  padding: 10px;
  margin: 7px 0 0 0;
  border-radius: 5px;
  border: 1px solid #ddd;

  &:focus {
    outline: none;
    border-color: #001b34;
  }
`;
