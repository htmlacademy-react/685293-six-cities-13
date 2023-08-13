import {createAction} from '@reduxjs/toolkit';

import {AppErrors, City, CurrentOffer, Offer, Review, User} from 'src/types';
import {AuthorizationStatus} from 'src/router/private-route';

export const changeCity = createAction<City>('changeCity');
export const addOffers = createAction('addOffers');
export const changeSortBy = createAction<string>('changeSortBy');
export const loadOffers = createAction<Offer[]>('loadOffers');
export const loadOffer = createAction<CurrentOffer>('loadOffer');
export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');
export const setOffersDataLoadingStatus = createAction<boolean>('setOffersDataLoadingStatus');
export const setOfferDataLoadingStatus = createAction<boolean>('setOfferDataLoadingStatus');
export const addUserData = createAction<User>('addUserData');
export const removeUserData = createAction('removeUserData');
export const addReviews = createAction<Review[]>('addReviews');
export const addCities = createAction<City[]>('addCities');
export const addCurrentCity = createAction<City>('addCurrentCity');
export const addNearOffers = createAction<Offer[]>('addNearOffers');
export const setAppError = createAction<AppErrors | null>('setAppError');
