import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import styles from './styles';

function HostPOS(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      Hello HostPOS
    </div>
  );
}

HostPOS.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(HostPOS);
