import {ReactElement, useState, useMemo} from 'react';

import PlacesList from 'src/components/places-list/place-list.tsx';
import Map from 'src/components/map/map.tsx';
import CitiesList from 'src/components/cities-list/cities-list.tsx';
import Sort from 'src/components/sort/sort.tsx';
import {SortType} from 'src/types';
import {sortByPrice, sortByRating} from 'src/helpers';
import { useAppSelector} from 'src/hooks/redux.ts';
import PageSpinner from '../../components/page-spinner/page-spinner.tsx';

function MainPage(): ReactElement {

  const [activeLocationId, setActiveLocationId] = useState<null | string>(null);

  const allOffers = useAppSelector((store) => store.offers);
  const city = useAppSelector((store) => store.city);
  const sortBy = useAppSelector((store) => store.sortBy);
  const cities = useAppSelector((store) => store.cities);
  const isOffersDataLoading = useAppSelector((state)=> state.offersLoadingStatus);


  const currentCityOffers = useMemo(
    () => allOffers?.filter((offer) => offer.city.name === city.name) || [],
    [allOffers, city]
  );

  const sortedOffers = useMemo(
    () => {
      switch (sortBy) {
        case SortType.priceAsc:
          return sortByPrice(currentCityOffers, 'asc');
        case SortType.priceDesc:
          return sortByPrice(currentCityOffers, 'desc');
        case SortType.rating:
          return sortByRating(currentCityOffers);
        default:
          return currentCityOffers;
      }
    },
    [currentCityOffers, sortBy]
  );

  const mainEmptyClass = currentCityOffers.length === 0 ? ' page__main--index-empty' : '';

  if (isOffersDataLoading) {
    return <PageSpinner/>;
  }

  return (
    <div className="page page--gray page--main">
      <main className={`page__main page__main--index ${mainEmptyClass}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={cities}/>
          </section>
        </div>
        <div className="cities">
          {
            currentCityOffers.length > 0 ?
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{`${currentCityOffers?.length} places to stay in ${city.name}`}</b>
                  <Sort/>
                  <div className="cities__places-list places__list tabs__content">
                    <PlacesList places={sortedOffers} setActiveLocationId={setActiveLocationId} cardsClassName={'cities__card'} />
                  </div>
                </section>
                <div className="cities__right-section">
                  <Map activeLocationId={activeLocationId} className={'cities__map'} places={sortedOffers}/>
                </div>
              </div> :

              <div className="cities__places-container cities__places-container--empty container">
                <section className="cities__no-places">
                  <div className="cities__status-wrapper tabs__content">
                    <b className="cities__status">No places to stay available</b>
                    <p className="cities__status-description">
                    We could not find any property available at the moment in
                    Dusseldorf
                    </p>
                  </div>
                </section>
                <div className="cities__right-section" />
              </div>
          }
        </div>
      </main>
    </div>
  );
}

export default MainPage;
