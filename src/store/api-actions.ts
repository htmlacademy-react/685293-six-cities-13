import {AxiosError, AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

import {
  APIRoute,
  AppDispatch,
  AppErrors,
  AuthData,
  CurrentOffer,
  Offer,
  Review,
  ReviewRequest,
  State,
  User
} from 'src/types';
import {dropToken, saveToken} from 'src/services/token.ts';
import {AuthorizationStatus} from 'src/router/private-route';

import {
  addCities,
  addCurrentCity,
  addNearOffers,
  addReviews,
  addUserData,
  loadOffer,
  loadOffers,
  requireAuthorization,
  setAppError,
  setOfferDataLoadingStatus,
  setOffersDataLoadingStatus
} from './action.ts';
import {getCitiesFromOffers, getDefaultCity} from '../helpers';

export const loginAction = createAsyncThunk<void, AuthData, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'login',
  async ({ email, password}, {dispatch, extra: api}) => {
    const {data: {token, email: userEmail, name, isPro, avatarUrl}} = await api.post<User>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(addUserData({
      email:userEmail,
      name,
      isPro,
      avatarUrl,
      token: 'broken_token'
    }));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const fetchOffersAction = createAsyncThunk<void, undefined, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));

    const {data} = await api.get<Offer[]>(APIRoute.Offers);
    const cities = getCitiesFromOffers(data);
    const defaultCity = getDefaultCity(cities);

    dispatch(loadOffers(data));
    dispatch(addCities(cities));
    dispatch(addCurrentCity(defaultCity));

    dispatch(setOffersDataLoadingStatus(false));
  },
);

export const fetchOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (arg, {dispatch, extra: api}) => {
    try {
      dispatch(setOfferDataLoadingStatus(true));
      const { data } = await api.get<CurrentOffer>(`${APIRoute.Offers}/${arg}`);
      dispatch(loadOffer(data));
      dispatch(setOfferDataLoadingStatus(false));
    } catch (error: unknown) {
      if (error instanceof AxiosError && error.response?.status === 404) {
        dispatch(setAppError(AppErrors.NotFound));
      }
    }

  },
);

export const fetchReviews = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchReviews',
  async (arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Review[]>(`${APIRoute.Comments}/${arg}`);
    dispatch(addReviews(data));
  },
);

export const makeReview = createAsyncThunk<void, ReviewRequest, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'makeReview',
  async ({comment, rating,offerId}, {dispatch, extra: api, getState}) => {
    const {data} = await api.post<Review>(`${APIRoute.Comments}/${offerId}`, {comment, rating});
    const reviews = getState().reviews;
    dispatch(addReviews([data, ...reviews]));
  },
);

export const fetchNearOffers = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchNearOffers',
  async (arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offer[]>(`${APIRoute.Offers}/${arg}/nearby`);
    dispatch(addNearOffers(data));
  },
);
