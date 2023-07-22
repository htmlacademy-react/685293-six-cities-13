import {placeCardsMock} from 'src/mocks';
import PlaceCard from 'src/components/place-card/place-card';

interface PlacesListProps {
  setActiveLocationId: (cardId: string | null) => void;
}

function PlacesList(props: PlacesListProps) {
  const {setActiveLocationId} = props;

  const onCardHover = (cardId: string):void => {
    setActiveLocationId(cardId);
  };

  const onCardUnhover = (): void => {
    setActiveLocationId(null);
  };

  return (
    <>
      {placeCardsMock.map((card) => <span onMouseLeave={onCardUnhover} onMouseEnter={()=>onCardHover(card.id)} key={card.id} ><PlaceCard placeCard={card}/></span>)}
    </>
  );
}


export default PlacesList;
