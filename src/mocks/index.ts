import {City, Offer, PlaceType} from 'src/types';

export const placeCardsMock: Offer[] = [
  {
    id: '1',
    title: 'Wood and stone place',
    type: PlaceType.apartment,
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 1,
        longitude: 2,
        zoom: 3
      }
    },
    location: {
      latitude: 52.390955,
      longitude: 4.853096,
    },
    isFavorite: true,
    isPremium: true,
    rating: 1,
    previewImage: 'img/room.jpg',
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: PlaceType.apartment,
    price: 120,
    city: {
      name: 'Cologne',
      location: {
        latitude: 1,
        longitude: 2,
        zoom: 3
      }
    },
    location: {
      latitude: 52.360955,
      longitude: 4.853096,
    },
    isFavorite: false,
    isPremium: true,
    rating: 2,
    previewImage: 'img/room.jpg',
  },
  {
    id: '3',
    title: 'Wood and stone place',
    type: PlaceType.private,
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 1,
        longitude: 2,
        zoom: 3
      }
    },
    location: {
      latitude: 52.390955,
      longitude: 4.929309,
    },
    isFavorite: true,
    isPremium: false,
    rating: 3,
    previewImage: 'img/room.jpg',
  },
  {
    id: '4',
    title: 'Wood and stone place',
    type: PlaceType.apartment,
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 1,
        longitude: 2,
        zoom: 3
      }
    },
    location: {
      latitude: 52.380955,
      longitude: 4.939309,
    },
    isFavorite: false,
    isPremium: false,
    rating: 1,
    previewImage: 'img/room.jpg',
  },
];

export const favoriteCardsMock: Offer[] = [
  {
    id: '1',
    title: 'Wood and stone place',
    type: PlaceType.apartment,
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 1,
        longitude: 2,
        zoom: 3
      }
    },
    location: {
      latitude: 1,
      longitude: 2,
      zoom: 3
    },
    isFavorite: true,
    isPremium: true,
    rating: 1,
    previewImage: 'img/room.jpg',
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: PlaceType.apartment,
    price: 120,
    city: {
      name: 'Cologne',
      location: {
        latitude: 1,
        longitude: 2,
        zoom: 3
      }
    },
    location: {
      latitude: 1,
      longitude: 2,
      zoom: 3
    },
    isFavorite: true,
    isPremium: true,
    rating: 2,
    previewImage: 'img/room.jpg',
  },
  {
    id: '3',
    title: 'Wood and stone place',
    type: PlaceType.private,
    price: 120,
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 1,
        longitude: 2,
        zoom: 3
      }
    },
    location: {
      latitude: 1,
      longitude: 2,
      zoom: 3
    },
    isFavorite: true,
    isPremium: false,
    rating: 3,
    previewImage: 'img/room.jpg',
  },
];

export const CITY: City = {
  name: 'Amsterdam',
  location: {
    latitude: 52.37 ,
    longitude: 4.90,
    zoom: 12,
  }
};
