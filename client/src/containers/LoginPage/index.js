import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import styles from './styles';

function LoginPage(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      Login nè
    </div>
  );
}

LoginPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(LoginPage);
