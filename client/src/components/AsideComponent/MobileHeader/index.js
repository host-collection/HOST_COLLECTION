import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import styles from './styles';
import { Welcome } from '../index';

function MobileMenu(props) {
  const { classes, onShowAside } = props;

  return (
    <div className={classes.mobileHeader}>
      <Welcome onShowAside={onShowAside} mobile="mobile" />
    </div>
  );
}

MobileMenu.propTypes = {
  classes: PropTypes.object,
  onShowAside: PropTypes.func
};

export default withStyles(styles)(MobileMenu);
