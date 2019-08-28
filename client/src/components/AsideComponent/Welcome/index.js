import React from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { IoIosLogIn } from "react-icons/io";
import PropTypes from 'prop-types';
import styles from './styles';
import * as titleContant from '../../../constants/ui/aside';

function Welcome(props) {
  const { classes } = props;

  return (
    <div className={classes.welcome}>
      <h6>
        {`${titleContant.WELCOME_TO} Portal`}
      </h6>
      <NavLink to="/login" className={classes.loginBtn}>
        <IoIosLogIn />
        <h6>{titleContant.LOGIN}</h6>
      </NavLink>
    </div>
  );
}

Welcome.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Welcome);
