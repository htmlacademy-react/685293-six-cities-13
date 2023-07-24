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
  builder.addCase(changeCity, (state, payload) => {
    state.city = payload.payload;
  });

  builder.addCase(addOffers, (state) => {
    state.offers = null;
  });

  builder.addCase(changeSortBy, (state, payload) => {
    state.sortBy = payload.payload;
  });
});

export {reducer};
