import axios from "axios";

import { API_URL } from "../../constants/ApiUrl";

export const addAtivo = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/addAtivo`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
