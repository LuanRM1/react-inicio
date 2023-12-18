import axios from "axios";
import { API_URL } from "../../constants/ApiUrl";

export async function UpdateStatus(id, formData) {
  const response = await axios.put(`${API_URL}/update-status/${id}`, formData);
  return response.data;
}
