import React from "react";
import { GeneralButton } from "./style.js";

function Button({ text, onClick, style }) {
  return (
    <GeneralButton style={style} onClick={onClick}>
      {text}
    </GeneralButton>
  );
}

export default Button;
