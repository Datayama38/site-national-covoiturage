'use client'
import DeckGL from '@deck.gl/react';
import MapGL from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { ReactNode } from 'react';

const defaultView = {
  latitude: 46.9,
  longitude: 1.7,
  zoom: 5,
  pitch: 0,
  bearing: 0
};

const DeckMap = ({ title, children }:{ title?: string, children?: ReactNode }) => {
  return (
    <div className="fr-callout">
      <h3 className="fr-callout__title">{ title }</h3>
      <DeckGL
        initialViewState={defaultView}
        controller={true}
      >
        <MapGL 
          mapLib={maplibregl}
          mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        >
          { children }
        </MapGL>
      </DeckGL>
    </div>
  );
};

export default DeckMap;