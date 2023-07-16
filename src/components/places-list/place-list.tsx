import React, {useState} from 'react';

import {placeCardsMock} from 'src/mocks';
import PlaceCard from 'src/components/place-card/place-card';

function PlaceCards() {
  const [activeCard, setActiveCard] = useState<null | string>(null);

  console.log(activeCard);

  const onCardHover = (cardId: string):void => {
    setActiveCard(cardId);
  };

  const onCardUnhover = (): void => {
    setActiveCard(null);
  };

  return (
    <>
      {placeCardsMock.map((card) => <span onMouseLeave={onCardUnhover} onMouseEnter={()=>onCardHover(card.id)} key={card.id} ><PlaceCard placeCard={card}/></span>)}
    </>
  );
}


export default PlaceCards;
