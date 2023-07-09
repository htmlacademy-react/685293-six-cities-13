import React from 'react';
import ReactDOM from 'react-dom/client';

import App from 'src/components/app/app';
import {placeCardsMock} from 'src/mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App cards={placeCardsMock}/>
  </React.StrictMode>
);
