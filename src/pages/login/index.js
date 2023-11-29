import React, { useState, useEffect } from "react";
import Form from "../../components/form";
import logo from "../../assets/logo.svg";
import { Logar } from "../../services/post/login";
import { LeftConteiner, PageConteiner, RightConteiner } from "./style";
function Login({ props }) {
  const [numeroRegistro, setNumeroRegistro] = useState("");
  useEffect(() => {
    (async () => {
      await Logar(numeroRegistro).then((response) => {
        console.log(response);
      });
    })();
  }, [numeroRegistro]);

  return (
    <PageConteiner>
      <LeftConteiner>
        <img src={logo} />
      </LeftConteiner>
      <RightConteiner>
        <Form
          numeroRegistro={numeroRegistro}
          updateNumeroRegistro={setNumeroRegistro}
        />
      </RightConteiner>
    </PageConteiner>
  );
}

export default Login;
