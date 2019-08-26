import React from 'react';

import NotFoundPage from './containers/NotFoundPage';
import Homepage from './containers/Homepage';
import LoginPage from './containers/LoginPage';
import MyPage from './containers/MyPage';
import FavoritePage from './containers/FavoritePage';
import SearchPage from './containers/SearchPage';

const routes = [
  {
    id: 1,
    path: '/',
    exact: true,
    main: () => <Homepage />
  },
  {
    id: 2,
    path: '/login',
    exact: false,
    main: () => <LoginPage />
  },
  {
    id: 3,
    path: '/my-page',
    exact: false,
    main: () => <MyPage />
  },
  {
    id: 4,
    path: '/favorite',
    exact: false,
    main: () => <FavoritePage />
  },
  {
    id: 5,
    path: '/search',
    exact: false,
    main: () => <SearchPage />
  },
  {
    id: 0,
    path: '',
    exact: false,
    main: () => <NotFoundPage />
  },
];

export default routes;
