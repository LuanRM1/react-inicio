import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import redIconUrl from '../../assets/redMarker.png'; // Caminho para o ícone do marcador vermelho
import { useParams } from "react-router-dom";
import { fetchPoints } from "../../services/post/entrega";
import { MainContainer } from "./style.js";
let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;
let RedIcon = L.icon({
  iconUrl: redIconUrl,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const Map = () => {
  const [points, setPoints] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetchPoints(id, setPoints);
  }, [id]);

  return (
    <MainContainer>
      <MapContainer
        iconAnchor={[16, 32]}
        center={[-23.553950311165032, -46.73351577773466]}
        zoom={6}
        style={{ height: "100vh", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Adicione marcadores para cada ponto */}
        {points.map((point, index) => (
          <Marker 
          key={point.id} 
          position={[point.lat, point.long]}
          icon={index === points.length - 1 ? RedIcon : DefaultIcon}
        >
            <Popup>{`ID: ${point.id} - Data: ${point.data}`}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </MainContainer>
  );
};

export default Map;
