import React from 'react';
import {Route, Routes} from 'react-router-dom';

import MainPage from 'src/pages/main';
import LoginPage from 'src/pages/login';
import OfferPage from 'src/pages/offer';
import Page404 from 'src/pages/404';
import PrivateRoute, {AuthorizationStatus} from './private-route';
import FavoritesPage from '../pages/favorites';

export enum AppRoute {
  Main='/',
  Login='/login',
  Favorites = '/favorites',
  Offer='/offer'
}

const Router: React.FC = () => (
  <Routes>
    <Route path={AppRoute.Main} element={<MainPage/>} />
    <Route path={AppRoute.Login} element={<LoginPage/>} />
    <Route path={AppRoute.Favorites} element={
      <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
        <FavoritesPage/>
      </PrivateRoute>
    }
    />
    <Route path={`${AppRoute.Offer}/:offerId`} element={<OfferPage/>} />
    <Route path='*' element={<Page404/>} />
  </Routes>
);

export default Router;

