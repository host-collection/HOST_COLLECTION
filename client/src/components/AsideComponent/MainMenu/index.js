import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import {
  FiUser, FiSearch, FiHeart, FiHome
} from "react-icons/fi";
import { NavLink } from "react-router-dom";
import styles from "./styles";
import * as titleContants from "../../../constants/aside";

const mainMenu = [
  {
    id: 1,
    name: titleContants.HOME,
    icon: <FiHome />,
    to: "/",
    exact: false
  },
  {
    id: 2,
    name: titleContants.MY_PAGE,
    icon: <FiUser />,
    to: "/my-page",
    exact: false
  },
  {
    id: 3,
    name: titleContants.FAVORITE,
    icon: <FiHeart />,
    to: "/favorite",
    exact: false
  },
  {
    id: 4,
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
            key={menu.id}
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

  const { classes } = props;

  return (
    <div className={classes.mainMenu}>
      {showMenus(mainMenu)}
    </div>
  );
}

MainMenu.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(MainMenu);
