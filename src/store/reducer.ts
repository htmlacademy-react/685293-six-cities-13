import {createReducer} from '@reduxjs/toolkit';

import {AppErrors, City, CurrentOffer, Offer, Review, SortType, User} from 'src/types';
import {AuthorizationStatus} from 'src/router/private-route';
import {DEFAULT_CITY} from 'src/helpers/constants.ts';

import {
  addCities, addCurrentCity, addNearOffers,
  addOffers, addReviews, addUserData,
  changeCity,
  changeSortBy, loadOffer,
  loadOffers, removeUserData,
  requireAuthorization, setAppError, setOfferDataLoadingStatus,
  setOffersDataLoadingStatus
} from './action.ts';


export interface StateI {
  city: City;
  cities: City[];
  offers: Offer[];
  offer: CurrentOffer | null;
  sortBy: string;
  authorizationStatus: AuthorizationStatus;
  offersLoadingStatus: boolean;
  offerLoadingStatus: boolean;
  user: User | null;
  reviews: Review[];
  nearOffers: Offer[];
  error: null | AppErrors;
}

const initialState: StateI = {
  city: DEFAULT_CITY,
  cities: [],
  offers: [],
  reviews: [],
  offer: null,
  sortBy: SortType.popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  offersLoadingStatus: false,
  offerLoadingStatus: false,
  user: null,
  nearOffers: [],
  error: null
};

const reducer = createReducer(initialState, (builder)=>{
  builder.addCase(changeCity, (state, action) => {
    state.city = action.payload;
  });

  builder.addCase(addOffers, (state) => {
    state.offers = [];
  });

  builder.addCase(changeSortBy, (state, action) => {
    state.sortBy = action.payload;
  });

  builder.addCase(loadOffers, (state, action) => {
    state.offers = action.payload;
  });

  builder.addCase(loadOffer, (state, action) => {
    state.offer = action.payload;
  });

  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });

  builder.addCase(setOffersDataLoadingStatus, (state, action) => {
    state.offersLoadingStatus = action.payload;
  });

  builder.addCase(setOfferDataLoadingStatus, (state, action) => {
    state.offerLoadingStatus = action.payload;
  });

  builder.addCase(addUserData, (state, action) => {
    state.user = action.payload;
  });

  builder.addCase(removeUserData, (state) => {
    state.user = null;
  });
  builder.addCase(addReviews, (state, action) => {
    state.reviews = action.payload;
  });
  builder.addCase(addCities, (state, action) => {
    state.cities = action.payload;
  });
  builder.addCase(addCurrentCity, (state, action) => {
    state.city = action.payload;
  });
  builder.addCase(addNearOffers, (state, action) => {
    state.nearOffers = action.payload;
  });
  builder.addCase(setAppError, (state, action) => {
    state.error = action.payload;
  });
});

export {reducer};
