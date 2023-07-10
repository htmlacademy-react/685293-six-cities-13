
export enum PlaceType {
  Apartment = 'apartment',
  PrivateRoom = 'room'
}

export interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
}

export interface City {
  name: string;
  location: Location;
}

export interface Offer {
  id: string;
  title: string;
  type: PlaceType;
  price: number;
  city: City;
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage: string;
}
