import {ReactElement, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import FeedbackForm from 'src/components/feedback-form/feedback-form.tsx';
import {AuthorizationStatus} from 'src/router/private-route';
import ReviewsList from 'src/components/reviews-list/place-list.tsx';
import Map from 'src/components/map/map.tsx';
import PlacesList from 'src/components/places-list/place-list.tsx';
import {useAppDispatch, useAppSelector} from 'src/hooks/redux.ts';
import {fetchNearOffers, fetchOfferAction, fetchReviews} from 'src/store/api-actions.ts';
import {getWidthFromStarsRating} from 'src/helpers';
import PageSpinner from 'src/components/page-spinner/page-spinner.tsx';

function OfferPage(): ReactElement {
  const dispatch = useAppDispatch();

  const [activeLocationId, setActiveLocationId] = useState<null | string>(null);

  const { offerId } = useParams<{ offerId: string }>();

  const authStatus: AuthorizationStatus = AuthorizationStatus.Auth;
  const nearOffers = useAppSelector((store) => store.nearOffers);
  const currentOffer = useAppSelector((store) => store.offer);
  const reviews = useAppSelector((store) => store.reviews);
  const isOfferDataLoading = useAppSelector((state)=> state.offerLoadingStatus);

  useEffect(() => {
    if (offerId) {
      dispatch(fetchOfferAction(offerId));
      dispatch(fetchReviews(offerId));
      dispatch(fetchNearOffers(offerId));
    }
  }, [dispatch, offerId]);

  const starsRatingWidth = currentOffer?.rating ? getWidthFromStarsRating(currentOffer?.rating) : '';

  if (isOfferDataLoading) {
    return <PageSpinner/>;
  }

  return (
    <div className="page">
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {
                currentOffer?.images.map((image) =>
                  (
                    <div key={image} className="offer__image-wrapper">
                      <img
                        className="offer__image"
                        src={image}
                        alt="Photo studio"
                      />
                    </div>
                  )
                )
              }
            </div>
          </div>
          {
            currentOffer &&
            <div className="offer__container container">
              <div className="offer__wrapper">
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
                <div className="offer__name-wrapper">
                  <h1 className="offer__name">
                    {currentOffer.title}
                  </h1>
                  <button className="offer__bookmark-button button" type="button">
                    <svg className="offer__bookmark-icon" width={31} height={33}>
                      <use xlinkHref="#icon-bookmark" />
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="offer__rating rating">
                  <div className="offer__stars rating__stars">
                    <span style={{ width: starsRatingWidth }} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="offer__rating-value rating__value">{currentOffer.rating}</span>
                </div>
                <ul className="offer__features">
                  <li className="offer__feature offer__feature--entire">{currentOffer.type}</li>
                  <li className="offer__feature offer__feature--bedrooms">
                    {`${currentOffer.bedrooms} Bedrooms`}
                  </li>
                  <li className="offer__feature offer__feature--adults">
                    {`Max ${currentOffer.maxAdults} adults`}
                  </li>
                </ul>
                <div className="offer__price">
                  <b className="offer__price-value">{`€${currentOffer.price}`}</b>
                  <span className="offer__price-text">&nbsp;night</span>
                </div>
                <div className="offer__inside">
                  <h2 className="offer__inside-title">What&apos;s inside</h2>
                  <ul className="offer__inside-list">
                    {currentOffer.goods.map((goods) => <li key={goods} className="offer__inside-item">{goods}</li>)}
                  </ul>
                </div>
                <div className="offer__host">
                  <h2 className="offer__host-title">Meet the host</h2>
                  <div className="offer__host-user user">
                    <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                      <img
                        className="offer__avatar user__avatar"
                        src={currentOffer.host.avatarUrl}
                        width={74}
                        height={74}
                        alt="Host avatar"
                      />
                    </div>
                    <span className="offer__user-name">{currentOffer.host.name}</span>
                    {
                      currentOffer.host.isPro && <span className="offer__user-status">Pro</span>
                    }
                  </div>
                  <div className="offer__description">
                    <p className="offer__text">
                      {currentOffer.description}
                    </p>
                  </div>
                </div>
                <section className="offer__reviews reviews">
                  <h2 className="reviews__title">
                    Reviews · <span className="reviews__amount">{reviews.length}</span>
                  </h2>
                  <ReviewsList reviews={reviews}/>
                  {
                    authStatus === AuthorizationStatus.Auth && <FeedbackForm offerId={currentOffer.id}/>
                  }
                </section>
              </div>
            </div>
          }

          <Map activeLocationId={activeLocationId} className={'offer__map'} places={nearOffers}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <PlacesList cardsClassName={'near-places__card'} setActiveLocationId={setActiveLocationId} places={nearOffers}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferPage;
