import axios from "axios";
import { API_URL } from "../../constants/ApiUrl";

export async function postDeliveryHistory(id, formData) {
  try {
    const response = await axios.post(
      `${API_URL}/delivery-history/${id}`,
      formData
    );
    return response.data;
  } catch (error) {
    // Trate o erro como achar melhor
    console.error("Erro ao postar o histórico de entrega:", error);
    throw error;
  }
}
