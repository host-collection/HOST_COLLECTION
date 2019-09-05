import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import {
  FiUser, FiSearch, FiHeart, FiHome
} from "react-icons/fi";
import { NavLink } from "react-router-dom";
import uniqid from 'uniqid';
import styles from "./styles";
import * as titleContants from "../../../constants/ui/aside";

const mainMenu = [
  {
    id: uniqid(),
    name: titleContants.HOME,
    icon: <FiHome />,
    to: "/",
    exact: true
  },
  {
    id: uniqid(),
    name: titleContants.MY_PAGE,
    icon: <FiUser />,
    to: "/my-page",
    exact: false
  },
  {
    id: uniqid(),
    name: titleContants.FAVORITE,
    icon: <FiHeart />,
    to: "/favorite",
    exact: false
  },
  {
    id: uniqid(),
    name: titleContants.SEARCH,
    icon: <FiSearch />,
    to: "/search",
    exact: false
  }
];

function MainMenu(props) {
  const showMenus = mainMenu => {
    const { classes } = props;
    let result = null;
    if (mainMenu.length > 0) {
      result = mainMenu.map(menu => {
        return (
          <NavLink
            key={`${menu.name}-${menu.id}`}
            className={classes.mainLink}
            to={menu.to}
            exact={menu.exact}
          >
            <span className={classes.icon}>
              {menu.icon}
            </span>
            {menu.name}
          </NavLink>
        );
      });
    }

    return result;
  };

  const { classes, mobile } = props;

  return (
    <div className={`${classes.mainMenu} ${mobile ? 'mainMenuMobile' : ''}`}>
      {showMenus(mainMenu)}
    </div>
  );
}

MainMenu.propTypes = {
  classes: PropTypes.object,
  mobile: PropTypes.string
};

export default withStyles(styles)(MainMenu);
