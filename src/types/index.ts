import {store} from 'src/store';

export const PlaceType = {
  apartment: 'Apartment',
  private: 'Private room',
} as const;

export interface Location {
  latitude: number;
  longitude: number;
  zoom?: number;
}

export interface City {
  name: string;
  location: Location;
}

export interface Offer {
  id: string;
  title: string;
  type: string;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}

export interface CurrentOffer extends Offer{
  bedrooms: number;
  goods: string[];
  description: string;
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: string[];
  maxAdults: number;
}

export interface User {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
}

export interface Review {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
}

export const SortType = {
  popular: 'Popular',
  priceAsc: 'Price: low to high',
  priceDesc: 'Price: high to low',
  rating: 'Top rated first',
} as const;

export type State = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export interface AuthData {
 email: string;
 password: string;
}

export enum APIRoute {
  Login = '/login',
  Logout = '/logout',
  Offers = '/offers',
  Comments = '/comments'
}
