'use client'
import { fr } from '@codegouvfr/react-dsfr';
import { getFlux } from '@/app/api/map';
import { useState, useEffect } from 'react';
import { jenks, classWidth } from '@/helpers/analyse';
import { ArcLayer } from '@deck.gl/layers/typed';
import DeckMap from '@/components/observatoire/maps/DeckMap';

export default function FluxMap() {
  const title = 'test'
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getFlux('XXXXX','com','country',2022,1)
      .then(response => { 
        setData(response);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData([]);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);
  const mapStyle = 'https://openmaptiles.geo.data.gouv.fr/styles/osm-bright/style.json';

  
  const analyse = data.length > 0 ? jenks(data,'passengers',['#000091','#000091','#000091','#000091','#000091','#000091'],[1,3,6,12,24,48]) : [];
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
  });
  const tooltip = ({object}:any) => object && {
    html: `<div class="tooltip-title"><b>${object.ter_1} - ${object.ter_2}</b></div>
    <div>${object.passengers} passagers transportés</div>
    <div>${object.distance.toLocaleString()} Km parcourus</div>`,
    className:'fr-callout',
    style: {
      color:'#000',
      backgroundColor: '#fff',
      fontSize: '1em',
      width:'250px',
      height:'110px',
      left:'-125px',
      top:'-110px'
    }
  };
  
  return (
    <>
      {
        loading && 
        <div className={fr.cx('fr-callout')}>
          <h3 className={fr.cx('fr-callout__title')}>{ title }</h3>
          <div>Chargement en cours...</div>
        </div>
      }
      { 
        error && 
        <div className={fr.cx('fr-callout')}>
          <h3 className={fr.cx('fr-callout__title')}>{ title }</h3>
          <div>{`Un problème est survenu au chargement des données: ${error}`}</div>
        </div>
      }
      {
        !loading && !error &&
        < DeckMap 
          title={title}
          tooltip={tooltip} 
          mapStyle={mapStyle}
          layers={[layer]}
        />
      }
    </>
  )
}