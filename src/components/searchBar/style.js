import styled from "styled-components";

export const SearchInput = styled.input`
  padding: 10px;
  margin: 20px 0;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    border-color: #4caf50;
  }
`;
