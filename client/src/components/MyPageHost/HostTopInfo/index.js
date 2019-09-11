import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import _ from "lodash/lang";
import { NavLink } from "react-router-dom";
import * as titleConstants from "../../../constants/ui/myPage";
import styles from "./styles";

function HostTopInfo(props) {
  const { classes } = props;

  const renderNickName = () => {
    const { userInfo } = props;
    let result = "";
    if (!_.isEmpty(userInfo) && !_.isEmpty(userInfo.nick_name)) {
      result = userInfo.nick_name;
    } else {
      result = titleConstants.HAVE_NOT_NAME;
    }
    return result;
  };

  return (
    <>
      <div className={classes.avatarBox}>
        <div className={classes.avatarBoxLeft}>
          <img
            src="https://instagram.fsgn2-3.fna.fbcdn.net/vp/043080ff43c3943780a670d76783e64f/5E13679C/t51.2885-15/e35/66490128_2450462518511023_1916167546464120854_n.jpg?_nc_ht=instagram.fsgn2-3.fna.fbcdn.net&_nc_cat=107"
            alt="avatar"
          />
          <h4>{renderNickName()}</h4>
        </div>
        <h5>
          <NavLink to="/shop" title={titleConstants.SHOP_CLICK}>
            Tokyo Shop
          </NavLink>
        </h5>
      </div>
    </>
  );
}

HostTopInfo.propTypes = {
  classes: PropTypes.object,
  userInfo: PropTypes.object
};

export default withStyles(styles)(HostTopInfo);
