import {Offer, PlaceType} from 'src/types';


export const getWidthFromStarsRating = (rating: number): string => {
  const oneStarWidth = 20;
  return `${oneStarWidth * rating}%`;
};

export const getPlaceTypeName = (placeType: PlaceType): string => {
  switch (placeType) {
    case PlaceType.Apartment:
      return 'Apartment';
    case PlaceType.PrivateRoom:
      return 'Private room';
  }
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
