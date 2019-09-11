import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import styles from './styles';

function HostSNS(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      Hello HostSNS
    </div>
  );
}

HostSNS.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(HostSNS);
