import { API_URL } from "../../constants/ApiUrl";
export async function fetchPoints(id, setPoints) {
  try {
    // Definindo o corpo da requisição com o ID desejado
    const requestBody = {
      id: id,
    };
    // Realizando a chamada da API
    const response = await fetch(`${API_URL}/location`, {
      method: "POST", // Método POST para enviar dados
      headers: {
        "Content-Type": "application/json", // Especificando o formato do conteúdo
      },
      body: JSON.stringify(requestBody), // Convertendo o corpo da requisição para JSON
    });

    const data = await response.json();

    // Atualiza os pontos um por um
    data.forEach((point) => {
      if (
        point.lat !== null &&
        point.long !== null &&
        point.lat !== 0 &&
        point.long !== 0
      ) {
        setPoints((prevPoints) => [...prevPoints, point]);
      }
    });
  } catch (error) {
    console.error("Erro ao obter dados da API:", error);
  }
}
