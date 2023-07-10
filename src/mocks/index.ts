import {PlaceCardI, PlaceType} from '../components/place-card/place-card.props';

export const placeCardsMock: PlaceCardI[] = [
  {
    id: 1,
    isPremium: true,
    imageUrl: 'img/room.jpg',
    price: 120,
    isBookmarkActive: true,
    starsCount: 1,
    description: 'Wood and stone place',
    type: PlaceType.Apartment
  },
  {
    id: 2,
    isPremium: false,
    imageUrl: 'img/room.jpg',
    price: 120,
    isBookmarkActive: true,
    starsCount: 2,
    description: 'Wood and stone place',
    type: PlaceType.Apartment
  },
  {
    id: 3,
    isPremium: true,
    imageUrl: 'img/room.jpg',
    price: 120,
    isBookmarkActive: false,
    starsCount: 3,
    description: 'Wood and stone place',
    type: PlaceType.PrivateRoom
  },
  {
    id: 4,
    isPremium: true,
    imageUrl: 'img/room.jpg',
    price: 120,
    isBookmarkActive: true,
    starsCount: 4,
    description: 'Wood and stone place',
    type: PlaceType.Apartment
  },
];
