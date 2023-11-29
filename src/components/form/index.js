import React, { useState, useEffect } from "react";
import { FormConteiner, FormWrapper, FormInput, FormButton } from "./style";
function Form(props) {
  const [numeroRegistro, setNumeroRegistro] = useState("");

  return (
    <FormConteiner>
      <FormWrapper>
        <FormInput
          onChange={(event) => {
            setNumeroRegistro(event.target.value);
          }}
          placeholder="Número de Registro"
        />
        <small>{props.erro}</small>
        <FormButton
          onClick={(event) => {
            event.preventDefault();
            props.updateNumeroRegistro(numeroRegistro);
          }}
        >
          Entrar
        </FormButton>
      </FormWrapper>
    </FormConteiner>
  );
}

export default Form;
