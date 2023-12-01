import React from "react";
import { TitleContainer } from "./style.js"; // Importando o estilo do arquivo style.js

const Title = ({ text }) => {
  return <TitleContainer>{text}</TitleContainer>;
};

export default Title;
