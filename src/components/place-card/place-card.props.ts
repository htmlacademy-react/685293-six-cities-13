
export enum PlaceType {
  Apartment = 'apartment',
  PrivateRoom = 'private'
}

export interface PlaceCardProps {
  isPremium: boolean;
  price: number;
  starsCount: number;
  description: string;
  type: PlaceType;
  imageUrl: string;
  isBookmarkActive: boolean;
}
