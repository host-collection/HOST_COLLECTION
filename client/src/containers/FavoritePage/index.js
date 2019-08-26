import React from 'react';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import styles from './styles';

function FavoritePage(props) {
  const { classes } = props;

  return (
    <div className={classes.container}>
      Favorite nè
    </div>
  );
}

FavoritePage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(FavoritePage);
