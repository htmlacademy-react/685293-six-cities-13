import {City} from 'src/types';
import {changeCity} from 'src/store/action.ts';
import {useAppDispatch, useAppSelector} from 'src/hooks/redux.ts';

interface CityItemProps {
  city: City;
}

function CityItem(props: CityItemProps) {
  const {city} = props;
  const dispatch = useAppDispatch();
  const currentCity = useAppSelector((store) => store.city);

  const activeClass = city.name === currentCity.name ? 'tabs__item--active' : '';

  const onCityItemClick = () => {
    dispatch(changeCity(city));
  };

  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${activeClass}`} href="#" onClick={onCityItemClick}>
        <span>{city.name}</span>
      </a>
    </li>
  );
}


export default CityItem;
