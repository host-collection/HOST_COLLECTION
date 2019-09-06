/* eslint-disable react/prop-types */
import React from 'react';
import uniqid from 'uniqid';
import * as myPageConstants from './constants/ui/myPage';

import NotFoundPage from './containers/NotFoundPage';
import Homepage from './containers/Homepage';
import AuthPage from './containers/AuthPage';
import MyPage from './containers/MyPage';
import FavoritePage from './containers/FavoritePage';
import SearchPage from './containers/SearchPage';

import MemberSettings from './containers/MyPage/MemberSettings';
import MemberTop from './containers/MyPage/MemberTop';

import HostTop from './containers/MyPage/HostTop';
import HostProfile from './containers/MyPage/HostProfile';
import HostAccountManage from './containers/MyPage/HostAccountManage';
import HostPromotion from './containers/MyPage/HostPromotion';
import HostSNS from './containers/MyPage/HostSNS';
import HostPOS from './containers/MyPage/HostPOS';
import HostCustomer from './containers/MyPage/HostCustomer';

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
    path: '/my-page/member/settings',
    exact: false,
    main: () => <MemberSettings />,
  },
];

export const myPageHostRoutes = [
  {
    id: uniqid(),
    name: myPageConstants.TOP,
    path: '/my-page',
    exact: true,
    main: () => <HostTop />,
  },
  {
    id: uniqid(),
    name: myPageConstants.PROFILE,
    path: '/my-page/host/profile',
    exact: false,
    main: () => <HostProfile />,
  },
  {
    id: uniqid(),
    name: myPageConstants.ACCOUNT_MANAGE,
    path: '/my-page/host/account-manage',
    exact: false,
    main: () => <HostAccountManage />,
  },
  {
    id: uniqid(),
    name: myPageConstants.PROMOTION,
    path: '/my-page/host/promotion',
    exact: false,
    main: () => <HostPromotion />,
  },
  {
    id: uniqid(),
    name: myPageConstants.SNS,
    path: '/my-page/host/sns',
    exact: false,
    main: () => <HostSNS />,
  },
  {
    id: uniqid(),
    name: myPageConstants.POS,
    path: '/my-page/host/pos',
    exact: false,
    main: () => <HostPOS />,
  },
  {
    id: uniqid(),
    name: myPageConstants.CUSTOMER,
    path: '/my-page/host/customer',
    exact: false,
    main: () => <HostCustomer />,
  }
];
