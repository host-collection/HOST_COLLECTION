import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { FaGlassMartiniAlt } from "react-icons/fa";
import { MdCancel } from "react-icons/md";
import styles from './styles';
import * as titleConstants from '../../../constants/ui/myPage';

function FavoriteHostItem(props) {
  const { classes } = props;

  return (
    <div className={classes.box}>
      <div className={classes.boxLeft}>
        <img
          src="https://image.freepik.com/free-psd/set-merchandising-products-with-company-logo_23-2148154563.jpg"
          alt="avatar"
        />
        <div>
          <h4>Barack Obama</h4>
          <h5>32/12/1995 20 AGE</h5>
          <h5>173cm / A / Gemini</h5>
        </div>
      </div>
      <div className={classes.boxRight}>
        <button type="button">
          <FaGlassMartiniAlt />
          { titleConstants.TODAY_CHOOSE }
        </button>
        <button type="button">
          <MdCancel />
          { titleConstants.REMOVE }
        </button>
      </div>
    </div>
  );
}

FavoriteHostItem.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(FavoriteHostItem);
