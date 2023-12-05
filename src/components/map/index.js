import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useParams } from 'react-router-dom';
import {fetchPoints} from "../../services/post/entrega";
import { MainContainer } from "./style.js"
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  const [points, setPoints] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    fetchPoints(id,setPoints);
  }, [id]);

  return (
    <MainContainer>
    <MapContainer
      center={[-23.553950311165032, -46.73351577773466]}
      zoom={6}
      style={{ height: '100vh', width: '100%'}}
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
    </MainContainer>
  );
};
  
  export default Map;