import React, {ReactElement} from 'react';

import MainPage from 'src/pages/main';
import {PlaceCardI} from 'src/components/place-card/place-card.props';

function App({cards}: {cards: PlaceCardI[]}): ReactElement {
  return <MainPage cards={cards}/>;
}

export default App;
