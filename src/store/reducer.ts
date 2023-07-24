import {createReducer} from '@reduxjs/toolkit';

import {City, Offer} from 'src/types';
import {CITIES, placeCardsMock} from 'src/mocks';

import {addOffers, changeCity} from './action.ts';


export interface StateI {
  city: City;
  offers: null | Offer[];
}

const initialState: StateI = {
  city: CITIES[0],
  offers: placeCardsMock
};

const reducer = createReducer(initialState, (builder)=>{
  builder.addCase(changeCity, (state, payload) => {
    state.city = payload.payload;
  });

  builder.addCase(addOffers, (state) => {
    state.offers = null;
  });
});

export {reducer};
