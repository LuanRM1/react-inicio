import { API_URL } from "../../constants/ApiUrl";
import axios from "axios";

export async function entregaInfo(id) {
  const body = {
    id: id,
  };
  const response = await axios.post(`${API_URL}/ativos`, body);
  return response.data;
}
