import PlaceCard from 'src/components/place-card/place-card';
import {Offer} from 'src/types';

interface PlacesListProps {
  setActiveLocationId: (cardId: string | null) => void;
  cardsClassName?: string;
  places: Offer[];
}

function PlacesList(props: PlacesListProps) {
  const {setActiveLocationId, cardsClassName, places} = props;

  const onCardHover = (cardId: string):void => {
    setActiveLocationId(cardId);
  };

  const onCardUnhover = (): void => {
    setActiveLocationId(null);
  };

  return (
    <>
      {places.map((card) => <span onMouseLeave={onCardUnhover} onMouseEnter={()=>onCardHover(card.id)} key={card.id} ><PlaceCard cardsClassName={cardsClassName} placeCard={card}/></span>)}
    </>
  );
}


export default PlacesList;
