import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styles from './styles';
import logo from '../../assets/images/logo.png';
import {
  SelectArea, Welcome, MainMenu, ContentsMenu
} from '../../components/AsideComponent';

const Aside = (props) => {
  const { classes } = props;

  return (
    <div className={classes.aside}>
      <NavLink to="/" exact={false}>
        <img className={classes.logo} src={logo} alt="logo" />
      </NavLink>
      <h5 className={classes.locationName}>
        Tokyo
      </h5>
      <Welcome />
      <SelectArea />
      <MainMenu />
      <ContentsMenu />
    </div>
  );
};

Aside.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Aside);
