import {PlaceType} from './place-card.props';


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
