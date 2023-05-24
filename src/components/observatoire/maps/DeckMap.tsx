'use client'
import {MapboxOverlay, MapboxOverlayProps} from '@deck.gl/mapbox/typed';
import MapGL  from 'react-map-gl';
import { useControl, NavigationControl } from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import { DeckMapInterface } from '@/interfaces/componentsInterfaces';
//css
import 'maplibre-gl/dist/maplibre-gl.css';

const defaultView = {
  latitude: 46.9,
  longitude: 1.7,
  zoom: 5,
};

function DeckGLOverlay(props: MapboxOverlayProps & {
  interleaved?: boolean;
}) {
  const overlay = useControl<MapboxOverlay>(() => new MapboxOverlay(props));
  overlay.setProps(props);
  return null;
}

const DeckMap = (props:DeckMapInterface) => {
  return (
    <div className="fr-callout" >
      <h3 className="fr-callout__title">{ props.title }</h3>
      <MapGL 
        mapLib={maplibregl}
        initialViewState={props.initialView ? props.initialView : defaultView}
        style={{
          width: props.width ? props.width : '100%', 
          height: props.height? props.height : '60vh'
        }}
        mapStyle={props.mapStyle}
      >
        <DeckGLOverlay layers={props.layers} getTooltip={props.tooltip}/>
        <NavigationControl />
      </MapGL>
    </div>
  );
};

export default DeckMap;