import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import * as LeafLet from 'leaflet';
import { generateUniqueId } from '../../../utils/generate-unique-id/generate-unique-id';
type Numbers = [number, number];

interface DataProps {
  data: Numbers[];
  center: Numbers;
}

const Map = ({ data, center }: DataProps) => {
  return (
    <MapContainer attributionControl={false} data-test-id="map" center={center} zoom={8} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <MarkerClusterGroup
        maxClusterRadius={150}
        spiderfyOnMaxZoom={true}
        key={generateUniqueId()}
        polygonOptions={{
          fillColor: '#ffffff',
          color: '#f00800',
          weight: 5,
          opacity: 1,
          fillOpacity: 0.8
        }}
        showCoverageOnHover={false}>
        {data.map(([lat, lng]) => {
          return (
            <Marker position={LeafLet.latLng(lat, lng)} key={lat}>
              <Popup>
                A pretty popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          );
        })}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default Map;
