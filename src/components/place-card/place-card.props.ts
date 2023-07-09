
export enum PlaceType {
  Apartment = 'apartment',
  PrivateRoom = 'private'
}

export interface PlaceCardI {
  id: number;
  isPremium: boolean;
  price: number;
  starsCount: number;
  description: string;
  type: PlaceType;
  imageUrl: string;
  isBookmarkActive: boolean;
}
