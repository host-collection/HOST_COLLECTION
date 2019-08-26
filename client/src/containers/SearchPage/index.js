import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import styles from './styles';

function SearchPage(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      Search nè
    </div>
  );
}

SearchPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(SearchPage);
