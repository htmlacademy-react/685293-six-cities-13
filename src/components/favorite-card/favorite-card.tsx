import { ReactElement} from 'react';

import {Offer} from 'src/types';
import {getWidthFromStarsRating} from 'src/helpers';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../router';

interface FavoriteLocationItemProps {
  offer: Offer;
}

function FavoriteCard(props: FavoriteLocationItemProps): ReactElement {

  const {offer} = props;

  const starsRatingWidth = getWidthFromStarsRating(offer.rating);
  const bookmarkActiveClass = offer.isFavorite ? 'place-card__bookmark-button--active' : '';

  return (
    <article className="favorites__card place-card">
      {
        offer.isPremium && <div className="place-card__mark"><span>Premium</span></div>
      }
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={150}
            height={110}
            alt="Place image"
          />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">
                        /&nbsp;night
            </span>
          </div>
          <button
            className={`place-card__bookmark-button button ${bookmarkActiveClass}`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: starsRatingWidth }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${offer.id}`}>
            {offer.title}
          </Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}


export default FavoriteCard;
