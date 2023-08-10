import {createReducer} from '@reduxjs/toolkit';

import {City, CurrentOffer, Offer, Review, SortType, User} from 'src/types';
import {CITIES} from 'src/mocks';
import {AuthorizationStatus} from 'src/router/private-route';

import {
  addCities, addCurrentCity,
  addOffers, addReviews, addUserData,
  changeCity,
  changeSortBy, loadOffer,
  loadOffers, removeUserData,
  requireAuthorization, setOfferDataLoadingStatus,
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
}

const initialState: StateI = {
  city: CITIES[0],
  cities: [],
  offers: [],
  reviews: [],
  offer: null,
  sortBy: SortType.popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  offersLoadingStatus: false,
  offerLoadingStatus: false,
  user: null
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
});

export {reducer};
