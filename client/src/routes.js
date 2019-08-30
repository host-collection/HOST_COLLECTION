import React from 'react';

import NotFoundPage from './containers/NotFoundPage';
import Homepage from './containers/Homepage';
import AuthPage from './containers/AuthPage';
import MyPage from './containers/MyPage';
import FavoritePage from './containers/FavoritePage';
import SearchPage from './containers/SearchPage';

const routes = [
  {
    id: 1,
    path: '/',
    exact: true,
    main: () => <Homepage />,
    private: false
  },
  {
    id: 2,
    path: '/login',
    exact: false,
    main: ({ history }) => <AuthPage history={history} />,
    private: false
  },
  {
    id: 3,
    path: '/my-page',
    exact: false,
    main: () => <MyPage />,
    private: true
  },
  {
    id: 4,
    path: '/favorite',
    exact: false,
    main: () => <FavoritePage />,
    private: true
  },
  {
    id: 5,
    path: '/search',
    exact: false,
    main: () => <SearchPage />,
    private: false
  },
  {
    id: 0,
    path: '',
    exact: false,
    main: () => <NotFoundPage />,
    private: false
  },
];

export default routes;
