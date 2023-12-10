import axios from "axios";
import { API_URL } from "../../constants/ApiUrl";

export async function UpdateInfo(id, formData) {
  const response = await axios.put(`${API_URL}/update-info/${id}`, formData);
  return response.data;
}
