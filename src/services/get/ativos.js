import { API_URL } from "../../constants/ApiUrl";

import axios from "axios";

export async function Ativos() {
  const response = await axios.get(`${API_URL}/ativos`);
  return response.data;
}
