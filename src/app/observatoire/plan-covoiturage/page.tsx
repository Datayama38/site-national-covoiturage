import  Map  from '@/components/observatoire/maps/Map'

export default function Page() {
  const title = 'test'
  const mapStyle = 'https://openmaptiles.geo.data.gouv.fr/styles/osm-bright/style.json';
  return (
    <div className="fr-container">
      <Map 
        title={title}
        mapStyle={mapStyle}
      />
    </div>
    
  )
}
