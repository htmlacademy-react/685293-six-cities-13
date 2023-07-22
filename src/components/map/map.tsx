import {useRef, useEffect, ReactElement} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import useMap from 'src/hooks/map.ts';
import {CITY, placeCardsMock} from 'src/mocks';

const URL_MARKER_DEFAULT = '/img/pin.svg';
const URL_MARKER_CURRENT = '/img/pin-active.svg';

interface MapProps {
  activeLocationId: string | null;
}
function Map(props: MapProps): ReactElement {
  const {activeLocationId} = props;
  const mapRef = useRef<null | HTMLElement>(null);
  const map = useMap(mapRef, CITY);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
  });

  useEffect(() => {
    if (map) {
      placeCardsMock.forEach((point) => {
        leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          }, {
            icon:  activeLocationId === point.id ? currentCustomIcon : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, activeLocationId, currentCustomIcon, defaultCustomIcon]);

  return (<section ref={mapRef} className="cities__map map" />);
}

export default Map;