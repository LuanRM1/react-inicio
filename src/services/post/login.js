import { API_URL } from "../../constants/ApiUrl";

import axios from "axios";

export async function Logar(numeroRegistro) {
  console.log(numeroRegistro);
  const body = {
    numeroRegistro: numeroRegistro,
  };
  const response = await axios.post(`${API_URL}/login`, body);
  return response.data;
}
