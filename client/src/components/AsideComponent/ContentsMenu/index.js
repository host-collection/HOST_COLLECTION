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
import styles from './styles';
import * as titleContant from '../../../constants/aside';

const menus = [
  {
    id: 1,
    name: titleContant.SNS,
    icon: <FaShareAlt />,
    to: '/sns',
    exact: false
  },
  {
    id: 2,
    name: titleContant.INFORMATION,
    icon: <FaInfoCircle />,
    to: '/information',
    exact: false
  },
  {
    id: 3,
    name: titleContant.BIRTHDAY,
    icon: <FaBirthdayCake />,
    to: '/birthday',
    exact: false
  },
  {
    id: 4,
    name: titleContant.SHOP_LIST,
    icon: <FaStore />,
    to: '/shop-list',
    exact: false
  },
  {
    id: 5,
    name: titleContant.COUPON,
    icon: <FaDiscourse />,
    to: '/coupon',
    exact: false
  },
  {
    id: 6,
    name: titleContant.RECRUITMENT,
    icon: <FaMale />,
    to: '/recruitment',
    exact: false
  },
  {
    id: 7,
    name: titleContant.VR,
    icon: <FaVrCardboard />,
    to: '/vr',
    exact: false
  },
  {
    id: 8,
    name: titleContant.CD_DVD,
    icon: <IoMdDisc />,
    to: '/cd-dvd',
    exact: false
  },
  {
    id: 9,
    name: titleContant.EVENT,
    icon: <IoMdGift />,
    to: '/event',
    exact: false
  },
  {
    id: 10,
    name: titleContant.VIDEO,
    icon: <FaVideo />,
    to: '/video',
    exact: false
  },
  {
    id: 11,
    name: titleContant.MANGA,
    icon: <FaBookReader />,
    to: '/manga',
    exact: false
  }
];

function ContentsMenu(props) {
  const { classes } = props;

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
    <div className={classes.contentsMenu}>
      <h5>{titleContant.CONTENTS}</h5>
      <ul>
        { showContentMenu(menus) }
      </ul>
    </div>
  );
}

ContentsMenu.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(ContentsMenu);
