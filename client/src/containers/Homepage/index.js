import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import styles from './styles';

function Homepage(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      Homepage
    </div>
  );
}

Homepage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(Homepage);
