import {useRef, useEffect, ReactElement} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

import useMap from 'src/hooks/map.ts';
import {Offer} from 'src/types';

import {useAppSelector} from '../../hooks/redux.ts';

const URL_MARKER_DEFAULT = '/img/pin.svg';
const URL_MARKER_CURRENT = '/img/pin-active.svg';

interface MapProps {
  activeLocationId: string | null;
  className?: string;
  places: Offer[];
}
function Map(props: MapProps): ReactElement {
  const {className = '', activeLocationId, places} = props;
  const mapRef = useRef<null | HTMLElement>(null);
  const city = useAppSelector((store) => store.city);

  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
  });

  useEffect(() => {
    if (map) {
      places.forEach((point) => {
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
  }, [map, activeLocationId, currentCustomIcon, defaultCustomIcon, places]);

  return (<section ref={mapRef} className={`${className} map`} />);
}

export default Map;
