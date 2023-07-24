import {ReactElement, useMemo} from 'react';
import {useSelector} from 'react-redux';
import {StateI} from 'src/store/reducer.ts';

import {groupOffersByCity} from 'src/helpers';
import FavoriteLocationItem from 'src/components/favorite-location-item/favorite-location-item.tsx';

function FavoritesPage(): ReactElement {
  const allOffers = useSelector((store: StateI) => store.offers);

  const favoriteCityOffers = useMemo(
    () => {
      const filteredOffers = allOffers?.filter((offer) => offer.isFavorite) || [];
      return groupOffersByCity(filteredOffers);
    },
    [allOffers]
  );

  const favoriteLocations = favoriteCityOffers.map((location) => <FavoriteLocationItem key={location[0]} cityName={location[0]} offers={location[1]}/>);

  if (!favoriteLocations || favoriteLocations.length === 0) {
    return (
      <div className="page page--favorites-empty">
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">
                  Save properties to narrow down search or plan your future trips.
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="page">
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoriteLocations}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default FavoritesPage;
