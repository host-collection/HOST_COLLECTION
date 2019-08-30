import React from "react";
import { NavLink } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import { IoIosLogIn, IoIosLogOut } from "react-icons/io";
import { MdMenu, MdClose } from "react-icons/md";
import PropTypes from "prop-types";
import styles from "./styles";
import logo from "../../../assets/images/logo.png";
import * as titleContant from "../../../constants/ui/aside";

function Welcome(props) {
  const { classes, onHiddenAside, mobile, onShowAside } = props;

  // const isLogin = () => {
  //   let result = null;
  //   if (localStorage.getItem("token")) {
  //     result = (

  //     );
  //   } else {
  //     result = (
  //       <button type="button">
  //         <IoIosLogOut />
  //         <h6>{titleContant.LOGOUT}</h6>
  //       </button>
  //     );
  //   }
  //   return result;
  // }

  const onLogout = () => {
    // localStorage.removeItem('token');
    console.log(localStorage.getItem("token"));
  };

  return (
    <div className={mobile ? classes.welcomeMobile : ""}>
      <NavLink to="/" exact={false}>
        <img className={classes.logo} src={logo} alt="logo" />
      </NavLink>
      <h5 className={classes.locationName}>Tokyo</h5>
      <div className={classes.welcome}>
        <h6 className={classes.welcomeText}>
          {`${titleContant.WELCOME_TO} Portal`}
        </h6>
        {localStorage.getItem("token") ? (
          <button type="button" onClick={onLogout}>
            <IoIosLogOut />
            <h6>{titleContant.LOGOUT}</h6>
          </button>
        ) : (
          <NavLink to="/login" className={classes.loginBtn}>
            <IoIosLogIn />
            <h6>{titleContant.LOGIN}</h6>
          </NavLink>
        )}
        <button
          type="button"
          onClick={onHiddenAside}
          className={classes.closeBtn}
        >
          <MdClose />
          <h6>{titleContant.MENU}</h6>
        </button>
        <button type="button" onClick={onShowAside} className={classes.openBtn}>
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
  mobile: PropTypes.string
};

export default withStyles(styles)(Welcome);
