import React from 'react';

import {getPlaceTypeName, getWidthFromStarsRating} from './helpers';
import {PlaceCardI} from './place-card.props';


function PlaceCard({placeCard}: {placeCard: PlaceCardI}) {

  const {isBookmarkActive, starsCount, isPremium, price, type, imageUrl, description} = placeCard;

  const bookmarkActiveClass = isBookmarkActive ? 'place-card__bookmark-button--active' : '';


  const placeTypeName = getPlaceTypeName(type);

  const starsRatingWidth = getWidthFromStarsRating(starsCount);

  return (
    <article className="cities__card place-card">
      {
        isPremium && <div className="place-card__mark"><span>Premium</span></div>
      }
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={imageUrl}
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
          <a href="#">
            {description}
          </a>
        </h2>
        <p className="place-card__type">{placeTypeName}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
