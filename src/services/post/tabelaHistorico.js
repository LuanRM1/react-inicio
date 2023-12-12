import { API_URL } from "../../constants/ApiUrl";
import axios from "axios";

export async function entregaHistorico(id) {
  console.log(id);
  const body = {
    id: id,
  };
  const response = await axios.post(`${API_URL}/hist`, body);
  return response.data;
}
