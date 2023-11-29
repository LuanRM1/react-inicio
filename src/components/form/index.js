import React, { useState, useEffect } from "react";
import { FormConteiner, FormWrapper, FormInput, FormButton } from "./style";
function Form(props) {
  const [numeroRegistro, setNumeroRegistro] = useState("");
  function handleSubmit(event) {
    console.log("Formulário enviado!");
  }
  return (
    <FormConteiner>
      <FormWrapper>
        <FormInput
          onChange={(event) => {
            setNumeroRegistro(event.target.value);
          }}
          placeholder="Número de Registro"
        />
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
