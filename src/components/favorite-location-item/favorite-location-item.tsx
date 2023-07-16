import { ReactElement} from 'react';

import {Offer} from 'src/types';
import FavoriteCard from 'src/components/favorite-card/favorite-card.tsx';

interface FavoriteLocationItemProps {
  cityName: string;
  offers: Offer[];
}

function FavoriteLocationItem(props: FavoriteLocationItemProps): ReactElement {
  const {cityName, offers} = props;

  const offersList = offers.map((offerItem) => <FavoriteCard key={offerItem.id} offer={offerItem}/>);

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{cityName}</span>
          </a>

        </div>
      </div>
      <div className="favorites__places">
        {offersList}
      </div>
    </li>
  );
}


export default FavoriteLocationItem;
