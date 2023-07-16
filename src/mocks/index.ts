import { Offer, PlaceType} from 'src/types';

export const placeCardsMock: Offer[] = [
  {
    id: '1',
    title: 'Wood and stone place',
    type: PlaceType.Apartment,
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
    type: PlaceType.Apartment,
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
    isFavorite: false,
    isPremium: true,
    rating: 2,
    previewImage: 'img/room.jpg',
  },
  {
    id: '3',
    title: 'Wood and stone place',
    type: PlaceType.PrivateRoom,
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
  {
    id: '4',
    title: 'Wood and stone place',
    type: PlaceType.Apartment,
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
    type: PlaceType.Apartment,
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
    type: PlaceType.Apartment,
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
    type: PlaceType.PrivateRoom,
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


