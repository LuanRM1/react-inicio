import React from "react";
import Form from "../../components/form";
import logo from "../../assets/logo.svg";
import { LeftConteiner, PageConteiner, RightConteiner } from "./style";
function Login({ props }) {
  return (
    <PageConteiner>
      <LeftConteiner>
        <img src={logo} />
      </LeftConteiner>
      <RightConteiner>
        <Form />
      </RightConteiner>
    </PageConteiner>
  );
}

export default Login;
