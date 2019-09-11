import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import styles from './styles';

function HostAccountManage(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      Hello HostAccountManage
    </div>
  );
}

HostAccountManage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(HostAccountManage);
