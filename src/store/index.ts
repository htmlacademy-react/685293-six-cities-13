import {configureStore} from '@reduxjs/toolkit';

import {createAPI} from 'src/services/api.ts';

import {reducer} from './reducer.ts';

const api = createAPI();

export const store = configureStore({reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api
      }
    })
});

