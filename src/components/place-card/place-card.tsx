import { getWidthFromStarsRating} from 'src/helpers';
import {Link} from 'react-router-dom';

import {AppRoute} from 'src/router';
import {Offer} from 'src/types';

interface PlaceCardProps {
  placeCard: Offer;
  cardsClassName?: string;
}

function PlaceCard(props: PlaceCardProps) {
  const {placeCard: {id, isFavorite, rating, isPremium, price, type, previewImage, title}, cardsClassName = ''} = props;

  const bookmarkActiveClass = isFavorite ? 'place-card__bookmark-button--active' : '';
  const starsRatingWidth = getWidthFromStarsRating(rating);

  return (
    <article className={`${cardsClassName} place-card`}>
      {
        isPremium && <div className="place-card__mark"><span>Premium</span></div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{`€${price}`}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
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
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: starsRatingWidth }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
