import axios from "axios";
import { API_URL } from "../../constants/ApiUrl";

export async function postDeliveryHistory(formData, id) {
  // Adiciona o id ao objeto formData
  const dataWithId = { ...formData, status: "red", id: id };
  console.log(dataWithId);

  try {
    const response = await axios.post(`${API_URL}/addEntrega`, dataWithId);
    return response.data;
  } catch (error) {
    console.error("Erro ao postar o histórico de entrega:", error);
    throw error; // Relança o erro após o log
  }
}
