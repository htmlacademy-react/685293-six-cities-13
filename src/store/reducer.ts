import {createReducer} from '@reduxjs/toolkit';

import {City, Offer, SortType, User} from 'src/types';
import {CITIES} from 'src/mocks';
import {AuthorizationStatus} from 'src/router/private-route';

import {
  addOffers, addUserData,
  changeCity,
  changeSortBy,
  loadOffers, removeUserData,
  requireAuthorization,
  setOffersDataLoadingStatus
} from './action.ts';

export interface StateI {
  city: City;
  offers: Offer[];
  sortBy: string;
  authorizationStatus: AuthorizationStatus;
  questionsLoadingStatus: boolean;
  user: User | null;
}

const initialState: StateI = {
  city: CITIES[0],
  offers: [],
  sortBy: SortType.popular,
  authorizationStatus: AuthorizationStatus.Unknown,
  questionsLoadingStatus: false,
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

  builder.addCase(requireAuthorization, (state, action) => {
    state.authorizationStatus = action.payload;
  });

  builder.addCase(setOffersDataLoadingStatus, (state, action) => {
    state.questionsLoadingStatus = action.payload;
  });

  builder.addCase(addUserData, (state, action) => {
    state.user = action.payload;
  });

  builder.addCase(removeUserData, (state) => {
    state.user = null;
  });
});

export {reducer};
