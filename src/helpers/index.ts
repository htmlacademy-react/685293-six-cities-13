import {Offer} from 'src/types';

export const getWidthFromStarsRating = (rating: number): string => {
  const oneStarWidth = 20;
  return `${oneStarWidth * rating}%`;
};

export const groupOffersByCity = (offers: Offer[]): [string, Offer[]][] => {
  const groupedOffers: { [cityName: string]: Offer[] } = {};

  for (const offer of offers) {
    const cityName = offer.city.name;
    if (!groupedOffers[cityName]) {
      groupedOffers[cityName] = [];
    }
    groupedOffers[cityName].push(offer);
  }

  return Object.entries(groupedOffers);
};


export const sortByPrice = (arr: Offer[], sortOrder: 'asc' | 'desc'): Offer[] => {
  if (sortOrder === 'asc') {
    arr.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'desc') {
    arr.sort((a, b) => b.price - a.price);
  } else {
    throw new Error('Invalid sortOrder. Use \'asc\' or \'desc\'.');
  }

  return arr;
};


export const sortByRating = (arr: Offer[]): Offer[] => {
  arr.sort((a, b) => b.rating - a.rating);

  return arr;
};
