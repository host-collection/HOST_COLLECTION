import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import styles from './styles';

function HostPromotion(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      Hello HostPromotion
    </div>
  );
}

HostPromotion.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(HostPromotion);
