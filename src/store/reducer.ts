import {createReducer} from '@reduxjs/toolkit';

import {City, Offer, SortType} from 'src/types';
import {CITIES, placeCardsMock} from 'src/mocks';

import {addOffers, changeCity, changeSortBy} from './action.ts';

export interface StateI {
  city: City;
  offers: null | Offer[];
  sortBy: string;
}

const initialState: StateI = {
  city: CITIES[0],
  offers: placeCardsMock,
  sortBy: SortType.popular
};

const reducer = createReducer(initialState, (builder)=>{
  builder.addCase(changeCity, (state, action) => {
    state.city = action.payload;
  });

  builder.addCase(addOffers, (state) => {
    state.offers = null;
  });

  builder.addCase(changeSortBy, (state, action) => {
    state.sortBy = action.payload;
  });
});

export {reducer};
