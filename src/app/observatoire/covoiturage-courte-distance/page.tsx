import { Badge } from "@codegouvfr/react-dsfr/Badge"
import  Map  from '@/components/observatoire/maps/Map'

export default function Page() {
  const title = 'Le covoiturage courte distance en France'
  const mapStyle = 'https://openmaptiles.geo.data.gouv.fr/styles/osm-bright/style.json';
  return (
    <article className="content">
      <div className="fr-grid-row">
        <div className="fr-col">
          <h1>{title}</h1>
          <Badge severity="info">
            Label info
          </Badge>
        </div>
      </div>
      <div className="fr-grid-row">
        <div className="fr-col">
          <Map 
            title={title}
            mapStyle={mapStyle}
          />
        </div>
      </div>
    </article>
  )
}
