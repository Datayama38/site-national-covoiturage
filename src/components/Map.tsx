'use client'
import MapGL from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { ReactNode } from 'react';

const defaultView = {
  latitude: 46.9,
  longitude: 1.7,
  zoom: 5
};

const Map = ({ title, children }:{ title?: string, children?: ReactNode }) => {
  return (
    <div className="fr-callout">
      <h3 className="fr-callout__title">{ title }</h3>
      <MapGL 
        initialViewState={defaultView}
        mapLib={maplibregl}
        style={{width: '100%', height: 400}}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
      >
        { children }
      </MapGL>
    </div>
  );
};

export default Map;