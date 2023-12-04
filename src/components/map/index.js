import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './style.js'; // Adjust the import path if necessary
const Map = () => {
    return (
      <MapContainer
        center={[0, 0]}
        zoom={2}
        style={{ height: '100vh', width: '50%', maxWidth: '300px' }} // Ajuste os valores conforme necessário
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    );
  };
  
  export default Map;
  