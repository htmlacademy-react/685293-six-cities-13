import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from 'src/components/app/app';
import {placeCardsMock} from 'src/mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App cards={placeCardsMock}/>
    </BrowserRouter>
  </React.StrictMode>
);
