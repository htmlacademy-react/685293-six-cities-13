import {ReactElement, useState, useMemo} from 'react';
import { useSelector } from 'react-redux';

import PlacesList from 'src/components/places-list/place-list.tsx';
import Map from 'src/components/map/map.tsx';
import {StateI} from 'src/store/reducer.ts';
import CitiesList from 'src/components/cities-list/cities-list.tsx';
import {CITIES} from 'src/mocks';


function MainPage(): ReactElement {
  const [activeLocationId, setActiveLocationId] = useState<null | string>(null);
  const allOffers = useSelector((store: StateI) => store.offers);
  const city = useSelector((store: StateI) => store.city);


  const currentCityOffers = useMemo(
    () => allOffers?.filter((offer) => offer.city.name === city.name) || [],
    [allOffers, city]
  );

  const mainEmptyClass = currentCityOffers.length === 0 ? ' page__main--index-empty' : '';

  return (
    <div className="page page--gray page--main">
      <main className={`page__main page__main--index ${mainEmptyClass}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={CITIES}/>
          </section>
        </div>
        <div className="cities">
          {
            currentCityOffers.length > 0 ?
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{`${currentCityOffers?.length} places to stay in ${city.name}`}</b>
                  <form className="places__sorting" action="#" method="get">
                    <span className="places__sorting-caption">Sort by</span>
                    <span className="places__sorting-type" tabIndex={0}>
                        Popular
                      <svg className="places__sorting-arrow" width={7} height={4}>
                        <use xlinkHref="#icon-arrow-select" />
                      </svg>
                    </span>
                    <ul className="places__options places__options--custom places__options--opened">
                      <li
                        className="places__option places__option--active"
                        tabIndex={0}
                      >
                      Popular
                      </li>
                      <li className="places__option" tabIndex={0}>
                      Price: low to high
                      </li>
                      <li className="places__option" tabIndex={0}>
                      Price: high to low
                      </li>
                      <li className="places__option" tabIndex={0}>
                      Top rated first
                      </li>
                    </ul>
                  </form>
                  <div className="cities__places-list places__list tabs__content">
                    <PlacesList places={currentCityOffers } setActiveLocationId={setActiveLocationId} cardsClassName={'cities__card'} />
                  </div>
                </section>
                <div className="cities__right-section">
                  <Map activeLocationId={activeLocationId} className={'cities__map'} places={currentCityOffers}/>
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
