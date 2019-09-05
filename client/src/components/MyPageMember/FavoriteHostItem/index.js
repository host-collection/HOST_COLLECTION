import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { FaGlassCheers } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import styles from './styles';
import * as titleConstants from '../../../constants/ui/myPage';

function FavoriteHostItem(props) {
  const { classes } = props;

  return (
    <div className={classes.box}>
      <div>
        <NavLink
          className={classes.boxLeft}
          to="/host-detail"
          title={titleConstants.CLICK_TO_VIEW_HOST}
        >
          <img
            src="https://instagram.fsgn2-4.fna.fbcdn.net/vp/5847f1dd02953f6c8cfc216cd7f4965e/5E0AA022/t51.2885-15/e35/67893011_2491605977545425_2858906288833890865_n.jpg?_nc_ht=instagram.fsgn2-4.fna.fbcdn.net&_nc_cat=109"
            alt="avatar"
          />
          <div>
            <h4>Barack Obama</h4>
            <h5>32/12/1995 20 AGE</h5>
            <h5>173cm / A / Gemini</h5>
          </div>
        </NavLink>
      </div>
      <div className={classes.boxRight}>
        <button className={classes.boxRightBtn} type="button">
          <FaGlassCheers />
          <span>
            { titleConstants.TODAY_CHOOSE }
          </span>
        </button>
        <button className={classes.boxRightBtn} type="button">
          <IoMdCloseCircleOutline />
          <span>
            { titleConstants.REMOVE }
          </span>
        </button>
      </div>
    </div>
  );
}

FavoriteHostItem.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(FavoriteHostItem);
