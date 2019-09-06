import React from "react";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";
import { MdMenu, MdClose } from "react-icons/md";
import PropTypes from "prop-types";
import _ from 'lodash/lang';
import styles from "./styles";
import logo from "../../../assets/images/logo.png";
import * as titleContant from "../../../constants/ui/aside";

function Welcome(props) {
  const {
    classes,
    onHiddenAside,
    mobile,
    onShowAside,
  } = props;

  const onLogout = () => {
    const { logout, history } = props;
    logout(history);
  };


  const renderAuthButton = () => {
    const { classes, authStatus } = props;
    let result = null;
    if (authStatus === '2' || localStorage.getItem("token")) {
      result = (
        <button type="button" className={classes.logoutBtn} onClick={onLogout}>
          <IoIosLogOut />
          <h6>{titleContant.LOGOUT}</h6>
        </button>
      );
    } else if (authStatus === '1' || authStatus === '2') {
      result = (
        <NavLink to="/login" className={classes.loginBtn}>
          <IoIosLogIn />
          <h6>{titleContant.LOGIN}</h6>
        </NavLink>
      );
    } else {
      result = (
        <NavLink to="/login" className={classes.loginBtn}>
          <IoIosLogIn />
          <h6>{titleContant.LOGIN}</h6>
        </NavLink>
      );
    }
    return result;
  };

  const renderUserWelcome = () => {
    let result = '';
    const { userInfo } = props;

    if (_.isEmpty(userInfo) || userInfo.nick_name === null) {
      result = `${titleContant.WELCOME} to Portal`;
    } else {
      result = `${titleContant.WELCOME} ${userInfo.nick_name}`;
    }
    return result;
  };

  return (
    <div className={mobile ? classes.welcomeMobile : ""}>
      <NavLink to="/" exact={false}>
        <img className={classes.logo} src={logo} alt="logo" />
      </NavLink>
      <h5 className={classes.locationName}>Tokyo</h5>
      <div className={classes.welcome}>
        <h6 className={`${classes.welcomeText} ${mobile ? 'welcomeMobile' : ''}`}>
          { renderUserWelcome() }
        </h6>
        {renderAuthButton()}
        <button
          type="button"
          onClick={onHiddenAside}
          className={`${classes.closeBtn} ${mobile ? 'closeMobile' : ''}`}
        >
          <MdClose />
          <h6>{titleContant.MENU}</h6>
        </button>
        <button
          type="button"
          onClick={onShowAside}
          className={`${classes.openBtn} ${mobile ? 'menuMobile' : ''}`}
        >
          <MdMenu />
          <h6>{titleContant.MENU}</h6>
        </button>
      </div>
    </div>
  );
}

Welcome.propTypes = {
  classes: PropTypes.object,
  onShowAside: PropTypes.func,
  onHiddenAside: PropTypes.func,
  mobile: PropTypes.string,
  authStatus: PropTypes.string,
  userInfo: PropTypes.object,
  history: PropTypes.object,
  logout: PropTypes.func
};

export default withStyles(styles)(Welcome);
