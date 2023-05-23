'use client'
import DeckGL from '@deck.gl/react/typed';
import { ArcLayer } from '@deck.gl/layers/typed';
import MapGL  from 'react-map-gl';
import { NavigationControl} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { getFlux } from '@/app/api/map';
import { useState, useEffect } from 'react';
import { jenks, classWidth } from '@/helpers/analyse';

const defaultView = {
  latitude: 46.9,
  longitude: 1.7,
  zoom: 5,
  pitch: 0,
  bearing: 0
};

const DeckMap = ({ title }:{ title?: string}) => {
  const [data, setData] = useState(null)
  useEffect(() => {
    getFlux('XXXXX','com','country',2022,1)
      .then(data => setData(data))
  }, [])
  if (!data) return <div>No data ...</div>
  const analyse = jenks(data,'passengers',['#000091','#000091','#000091','#000091','#000091','#000091'],[1,3,6,12,24,48])
  const layer = new ArcLayer({
    id:'flux-layer',
    data:data,
    opacity:0.3,
    pickable: true,
    getWidth: (d) => classWidth(d.passengers,analyse),
    getSourcePosition: (d) => [d.lng_1,d.lat_1],
    getTargetPosition: (d) => [d.lng_2,d.lat_2],
    getSourceColor: [0,0,145],
    getTargetColor:  [0,0,145],
  })
  return (
    <div className="fr-callout" >
      <h3 className="fr-callout__title">{ title }</h3>
      <div style={{position:"relative", width:'100%', height:'60vh'}}>
        <DeckGL
          initialViewState={defaultView}
          controller={true}
          layers={[layer]}
          getTooltip={({object}) => object && {
            html: `<div class="tooltip-title"><b>${object.ter_1} - ${object.ter_2}</b></div>
            <div>${object.passengers} passagers transportés</div>
            <div>${object.distance.toLocaleString()} Km parcourus</div>`,
            className:'fr-callout',
            style: {
              color:'#000',
              backgroundColor: '#fff',
              fontSize: '0.8em',
              width:'250px',
              height:'110px',
              left:'-125px',
              top:'-110px'
            }
          }}
        >
          <MapGL 
            mapLib={maplibregl}
            mapStyle="https://openmaptiles.geo.data.gouv.fr/styles/osm-bright/style.json"
          >
            <NavigationControl />
          </MapGL>
        </DeckGL>
      </div>
    </div>
  );
};

export default DeckMap;