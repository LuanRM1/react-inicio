import { API_URL } from "../../constants/ApiUrl";

import axios from "axios";

export async function entregaAtivos() {
  const response = await axios.get(`${API_URL}/listAll`);
  return response.data;
}
