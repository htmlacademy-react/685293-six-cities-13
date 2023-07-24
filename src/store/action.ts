import {createAction} from '@reduxjs/toolkit';
import {City} from 'src/types';

export const changeCity = createAction<City>('changeCity');
export const addOffers = createAction('addOffers');
