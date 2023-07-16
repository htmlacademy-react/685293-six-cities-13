import {Offer} from 'src/components/place-card/place-card.props';

export const groupOffersByCity = (offers: Offer[]): Record<string, Offer[]> => {
  const groupedOffers: { [cityName: string]: Offer[] } = {};

  for (const offer of offers) {
    const cityName = offer.city.name;
    if (!groupedOffers[cityName]) {
      groupedOffers[cityName] = [];
    }
    groupedOffers[cityName].push(offer);
  }

  return groupedOffers;
};
