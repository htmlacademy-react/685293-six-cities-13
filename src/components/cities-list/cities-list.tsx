import CityItem from '../city-item/city-item.tsx';
import {City} from 'src/types';

interface CitiesListProps {
  cities: City[];
}

function CitiesList(props: CitiesListProps) {
  const {cities} = props;

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (<CityItem key={city.name} city={city}/>))}
    </ul>
  );
}

export default CitiesList;
