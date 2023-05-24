
import * as React from "react";
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

interface MaplibreMapProps {
  initialOptions?: Omit<maplibregl.MapOptions, "container">;
  onMapLoaded?(map: maplibregl.Map): void;
  onMapRemoved?(): void;
}

function MaplibreMap({ initialOptions = {style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"}, onMapLoaded, onMapRemoved }: MaplibreMapProps) {
  const [map, setMap] = React.useState<maplibregl.Map>();

  const mapNode = React.useRef(null);

  React.useEffect(() => {
    const node = mapNode.current;

    if (typeof window === "undefined" || node === null) return;

    const maplibreMap = new maplibregl.Map({
      container: node,
      center: [-74.5, 40],
      zoom: 9,
      ...initialOptions,
    });

    setMap(maplibreMap);

    if (onMapLoaded) maplibreMap.once("load", onMapLoaded);

    return () => {
      maplibreMap.remove();
      if (onMapRemoved) onMapRemoved();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div ref={mapNode} style={{ width: "100%", height: 400 }} />;
}

export default MaplibreMap;
