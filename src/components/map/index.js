import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
    const [points, setPoints] = useState([]);
  
    useEffect(() => {
      // Função para chamar a API
      const fetchPoints = async () => {
        try {
          const response = await fetch('http://localhost:3001/ativos');
          const data = await response.json();
  
          // Atualiza os pontos um por um
          data.forEach((point) => {
            if (point.lat !== null && point.long !== null && point.lat !== 0 && point.long !== 0) {
              setPoints((prevPoints) => [...prevPoints, point]);
            }
          });
        } catch (error) {
          console.error('Erro ao obter dados da API:', error);
        }
      };
  
      // Chama a função de busca quando o componente for montado
      fetchPoints();
    }, []); // O array vazio assegura que a função só será chamada uma vez, equivalente ao componentDidMount
  
    return (
      <MapContainer
        center={[-23.553950311165032, -46.73351577773466]}
        zoom={6}
        style={{ height: '100vh', width: '50%'}}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
  
        {/* Adicione marcadores para cada ponto */}
        {points.map((point) => (
          <Marker key={point.id} position={[point.lat, point.long]}>
            <Popup>{`ID: ${point.id} - Data: ${point.data}`}</Popup>
          </Marker>
        ))}
      </MapContainer>
    );
  };
  
  export default Map;