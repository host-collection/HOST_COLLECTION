/* eslint-disable react/prop-types */
import React from 'react';
import uniqid from 'uniqid';

import NotFoundPage from './containers/NotFoundPage';
import Homepage from './containers/Homepage';
import AuthPage from './containers/AuthPage';
import MyPage from './containers/MyPage';
import FavoritePage from './containers/FavoritePage';
import SearchPage from './containers/SearchPage';

import MemberSettings from './containers/MyPage/MemberSettings';
import MemberTop from './containers/MyPage/MemberTop';

export const routes = [
  {
    id: uniqid(),
    path: '/',
    exact: true,
    main: () => <Homepage />,
    private: false
  },
  {
    id: uniqid(),
    path: '/login',
    exact: false,
    main: ({ history }) => <AuthPage history={history} />,
    private: false
  },
  {
    id: uniqid(),
    path: '/my-page',
    exact: false,
    main: ({ history }) => <MyPage history={history} />,
    private: true
  },
  {
    id: uniqid(),
    path: '/favorite',
    exact: false,
    main: () => <FavoritePage />,
    private: true
  },
  {
    id: uniqid(),
    path: '/search',
    exact: false,
    main: () => <SearchPage />,
    private: false
  },
  {
    id: uniqid(),
    path: '',
    exact: false,
    main: () => <NotFoundPage />,
    private: false
  }
];

export const myPageMemberRoutes = [
  {
    id: uniqid(),
    path: '/my-page',
    exact: true,
    main: () => <MemberTop />,
  },
  {
    id: uniqid(),
    path: '/my-page/settings',
    exact: false,
    main: () => <MemberSettings />,
  },
];

export const myPageHostRoutes = [
  {
    id: uniqid(),
    path: '/my-page',
    exact: false,
    main: () => <MemberSettings />,
  },
  {
    id: uniqid(),
    path: '/my-page/settings',
    exact: false,
    main: () => <MemberSettings />,
  },
];
