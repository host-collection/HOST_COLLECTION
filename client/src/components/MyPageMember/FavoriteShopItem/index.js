import React from "react";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";
import { FaRegHeart } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";
import styles from "./styles";
import * as titleConstants from "../../../constants/ui/myPage";

function FavoriteShopItem(props) {
  const { classes } = props;

  return (
    <div className={classes.box}>
      <div className={classes.boxLeft}>
        <img
          src="https://instagram.fsgn2-4.fna.fbcdn.net/vp/a5de31fd6866870e59067105d07a824f/5E05B170/t51.2885-15/sh0.08/e35/p640x640/67594996_702862093460289_3434895305915866330_n.jpg?_nc_ht=instagram.fsgn2-4.fna.fbcdn.net&_nc_cat=109"
          alt="avatar"
        />
        <div>
          <h4>店名店名店名店名店名店名</h4>
          <h5>CLUB NAME</h5>
          <h5>
            <NavLink
              to="/host-detail"
              title={titleConstants.CLICK_TO_VIEW_SHOP}
            >
              {titleConstants.VIEW_MORE}
            </NavLink>
          </h5>
        </div>
      </div>
      <div className={classes.boxRight}>
        <button className={classes.boxRightBtn} type="button">
          <FaRegHeart />
          <span>
            {titleConstants.LIKE_THIS}
          </span>
        </button>
        <button className={classes.boxRightBtn} type="button">
          <IoMdCloseCircleOutline />
          <span>
            {titleConstants.REMOVE}
          </span>
        </button>
      </div>
    </div>
  );
}

FavoriteShopItem.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(FavoriteShopItem);
