import React from "react";
import { FormConteiner, FormWrapper, FormInput, FormButton } from "./style";
function Form({ props }) {
  return (
    <FormConteiner>
      <FormWrapper>
        <FormInput placeholder="Número de Registro" />
        <FormButton>Entrar</FormButton>
      </FormWrapper>
    </FormConteiner>
  );
}

export default Form;
