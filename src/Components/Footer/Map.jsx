import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const position = [-12.0464, -77.0428];

const Map = () => {
    return (
        <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }} >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy;'
            />
            <Marker position={position}>
                <Popup>
                    Ubicación de ejemplo: Lima, Perú.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default Map;
