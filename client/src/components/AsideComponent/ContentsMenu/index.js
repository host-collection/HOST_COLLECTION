import React from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import {
  FaInfoCircle,
  FaBirthdayCake,
  FaStore,
  FaDiscourse,
  FaMale,
  FaVrCardboard,
  FaVideo,
  FaBookReader,
  FaShareAlt
} from "react-icons/fa";
import { IoMdGift, IoMdDisc } from 'react-icons/io';
import uniqid from 'uniqid';
import styles from './styles';
import * as titleContant from '../../../constants/ui/aside';

const menus = [
  {
    id: uniqid(),
    name: titleContant.SNS,
    icon: <FaShareAlt />,
    to: '/sns',
    exact: false
  },
  {
    id: uniqid(),
    name: titleContant.SHOP_LIST,
    icon: <FaStore />,
    to: '/shop-list',
    exact: false
  },
  {
    id: uniqid(),
    name: titleContant.COUPON,
    icon: <FaDiscourse />,
    to: '/coupon',
    exact: false
  },
  {
    id: uniqid(),
    name: titleContant.BIRTHDAY,
    icon: <FaBirthdayCake />,
    to: '/birthday',
    exact: false
  },
  {
    id: uniqid(),
    name: titleContant.RECRUITMENT,
    icon: <FaMale />,
    to: '/recruitment',
    exact: false
  },
  {
    id: uniqid(),
    name: titleContant.INFORMATION,
    icon: <FaInfoCircle />,
    to: '/information',
    exact: false
  },
  {
    id: uniqid(),
    name: titleContant.VR,
    icon: <FaVrCardboard />,
    to: '/vr',
    exact: false
  },
  {
    id: uniqid(),
    name: titleContant.CD_DVD,
    icon: <IoMdDisc />,
    to: '/cd-dvd',
    exact: false
  },
  {
    id: uniqid(),
    name: titleContant.EVENT,
    icon: <IoMdGift />,
    to: '/event',
    exact: false
  },
  {
    id: uniqid(),
    name: titleContant.VIDEO,
    icon: <FaVideo />,
    to: '/video',
    exact: false
  },
  {
    id: uniqid(),
    name: titleContant.MANGA,
    icon: <FaBookReader />,
    to: '/manga',
    exact: false
  }
];

function ContentsMenu(props) {
  const { classes, mobile } = props;

  const showContentMenu = menus => {
    let result = null;
    if (menus.length > 0) {
      result = menus.map(menu => {
        return (
          <li key={`${menu.name}-${menu.index}`}>
            <NavLink to={menu.to} exact={menu.exact}>
              {menu.icon}
              {menu.name}
            </NavLink>
          </li>
        );
      });
    }
    return result;
  };

  return (
    <div className={`${classes.contentsMenu} ${mobile ? 'mobile' : ''}`}>
      <h5>{titleContant.CONTENTS}</h5>
      <ul>
        { showContentMenu(menus) }
      </ul>
    </div>
  );
}

ContentsMenu.propTypes = {
  classes: PropTypes.object,
  mobile: PropTypes.string
};

export default withStyles(styles)(ContentsMenu);
