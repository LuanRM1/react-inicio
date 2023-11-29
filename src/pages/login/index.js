import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../components/form";
import logo from "../../assets/logo.svg";
import { Logar } from "../../services/post/login";
import { LeftConteiner, PageConteiner, RightConteiner } from "./style";
function Login({ props }) {
  const [numeroRegistro, setNumeroRegistro] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (numeroRegistro != "") {
      (async () => {
        await Logar(numeroRegistro).then((response) => {
          console.log(response);
          if (response.message === true) {
            navigate("/ativos");
          } else {
            setErro("Numero de registro não encontrado");
          }
        });
      })();
    }
  }, [numeroRegistro]);

  return (
    <PageConteiner>
      <LeftConteiner>
        <img src={logo} />
      </LeftConteiner>
      <RightConteiner>
        <Form
          erro={erro}
          numeroRegistro={numeroRegistro}
          updateNumeroRegistro={setNumeroRegistro}
          updateErro={setErro}
        />
      </RightConteiner>
    </PageConteiner>
  );
}

export default Login;
