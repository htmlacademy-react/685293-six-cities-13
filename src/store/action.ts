import {createAction} from '@reduxjs/toolkit';

import {City, Offer, User} from 'src/types';
import {AuthorizationStatus} from 'src/router/private-route';

export const changeCity = createAction<City>('changeCity');
export const addOffers = createAction('addOffers');
export const changeSortBy = createAction<string>('changeSortBy');
export const loadOffers = createAction<Offer[]>('loadOffers');
export const requireAuthorization = createAction<AuthorizationStatus>('requireAuthorization');
export const setOffersDataLoadingStatus = createAction<boolean>('setOffersDataLoadingStatus');
export const addUserData = createAction<User>('addUserData');
export const removeUserData = createAction('removeUserData');

